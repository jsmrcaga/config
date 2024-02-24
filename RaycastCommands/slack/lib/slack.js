const local_config = require('./local-config');

const SLACK_API_ENDPOINT = 'https://slack.com';

class SlackError extends Error {
	constructor(message, { status, response, ...options}={}) {
		super(message, options);
		this.status = status;
		this.response = response;
	}
}

class Slack {
	constructor() {
		this.token = null;
	}

	request(path, options={}) {
		const url = `${SLACK_API_ENDPOINT}${path}`;

		return this.ready().then(() => {
			return fetch(url, {
				...options,
				headers: {
					...options.headers,
					Authorization: `Bearer ${this.token}`,
					'Content-Type': 'application/json; charset=utf-8'
				}
			});
		}).then(response => {
			if(response.status < 200 || response.status >= 300) {
				return response.text().then((text) => {
					throw new SlackError('Slack API error', {
						status: response.status,
						response: text
					});
				});
			}

			return Promise.all([response, response.json()]);
		}).then(([response, json]) => {
			if(!json.ok) {
				throw new SlackError('Slack API error', {
					status: response.status,
					response: json
				});
			}

			return json;
		});
	}

	status({ emoji:status_emoji='', status:status_text='', expires=null }={}) {
		return this.request('/api/users.profile.set', {
			method: 'POST',
			body: JSON.stringify({
				profile: {
					status_emoji,
					status_text,
					status_expiration: expires ? Math.floor(expires.getTime()/1000) : 0,
				}
			})
		});
	}

	ready() {
		if(this.token) {
			return Promise.resolve(this);
		}

		return local_config.read_config().then(({ slack_token }) => {
			if(!slack_token) {
				throw new Error('Cannot read slack token. Run the Slack token setup first');
			}

			this.token = slack_token;
			return this;
		});
	}
}

module.exports = Slack;
