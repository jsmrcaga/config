#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Slack - In a meeting
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 📆
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true
// @raycast.argument1 { "type": "text", "placeholder": "15 min", "percentEncoded": false, "optional": true, "secure": false }

// Documentation:
// @raycast.description Set slack status as "in a meeting" for 15 minutes
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const slack = require('../lib');

const SECOND = 1000;
const MINUTE = SECOND * 60;

const args = process.argv.slice(2);
const [minutes_str='15'] = args;
const minutes = minutes_str ? +minutes_str : 15;

return slack.status({
	emoji: '📆',
	status: 'In a meeting',
	expires: new Date(Date.now() + (minutes * MINUTE))
}).then(() => {
	console.log('👍🏼');
	process.exit(0);
});
