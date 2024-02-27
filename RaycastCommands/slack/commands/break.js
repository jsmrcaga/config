#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Slack - Taking a break (15m)
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🕛
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true

// Documentation:
// @raycast.description Set Slack status to `🕛`
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const slack = require('../lib');

return slack.status({
	emoji: '🕛',
	status: '15m',
	expires: null
}).then(() => {
	console.log('👍🏼');
	process.exit(0);
});
