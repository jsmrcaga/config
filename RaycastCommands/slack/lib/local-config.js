const OS = require('node:os');
const path = require('node:path');
const fs = require('node:fs/promises');

const HOMEDIR = OS.homedir();
const CONFIG_DIRECTORY = path.join(HOMEDIR, '/.raycast.self');
const CONFIG_FILE = path.join(CONFIG_DIRECTORY, './slack-status');

// encoding
const encode_config = (config) => {
	return Buffer.from(JSON.stringify(config)).toString('base64');
};

const decode_config = (config) => {
	const fromB64 = Buffer.from(config, 'base64').toString('utf8');
	return JSON.parse(fromB64);
};

// file system
const ensure_config_dir = () => {
	return fs.stat(CONFIG_DIRECTORY).catch(e => {
		if(e.code === 'ENOENT') {
			return fs.mkdir(CONFIG_DIRECTORY, {
				recursive: false,
				mode: '770'
			});
		}

		throw e;
	});
}

const ensure_config_file = () => {
	return ensure_config_dir().then(() => {
		return fs.stat(CONFIG_FILE).then(() => {
			// File exists, nothing to do
			return;
		}).catch(e => {
			if(e.code === 'ENOENT') {
				return save_config({});
			}

			throw e;
		});
	});
};

const read_config = () => {
	return ensure_config_file().then(() => {
		return fs.readFile(CONFIG_FILE, { encoding: 'utf8' });
	}).then(file => {
		return decode_config(file);
	});
};

const save_config = (config) => {
	return fs.writeFile(CONFIG_FILE, encode_config(config));
};

const append_config = (new_config={}) => {
	return read_config().then(config => {
		return save_config({
			...config,
			...new_config
		});
	});
};

module.exports = {
	read_config,
	append_config
};
