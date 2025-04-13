#!/usr/bin/env node

const Process = require('node:child_process');

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title mtg-std
// @raycast.mode inline

// Optional parameters:
// @raycast.icon 🃏
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false

// Documentation:
// @raycast.description Open Scryfall with recent standard sets B & W
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

// 2.5 years per set
const STANDARD_ROTATION_TIME = new Date();
STANDARD_ROTATION_TIME.setMonth(STANDARD_ROTATION_TIME.getMonth() - (12 * 2.5));

// Thanks to whatsinstandard.com
return fetch('https://whatsinstandard.com/api/v6/standard.json').then(res => {
	if(!res.ok) {
		return res.text().then(text => {
			const error = new Error('Could not get standard cards from whatsinstandard');
			error.status = res.status;
			error.headers = res.headers;
			error.response = text;
		});
	}

	return res.json();
}).then(({ sets }) => {
	const recent_sets = sets.filter(set => {
		if(!set.code) {
			return false;
		}

		if(!set.enterDate.exact) {
			return true;
		}

		const set_enter_date = new Date(set.enterDate.exact);
		return set_enter_date >= STANDARD_ROTATION_TIME;
	});

	const recent_set_names_query = recent_sets.map(set => `set:${set.code}`);

	const query = `(${recent_set_names_query.join(' OR ')}) (c=b OR c=w OR c=bw) f:standard`;

	try {
		Process.execSync(`open 'https://scryfall.com/search?q=${encodeURIComponent(query)}&order=color&as=grid&unique=cards'`);
	} catch(e) {
		console.error(result);
	}
});
