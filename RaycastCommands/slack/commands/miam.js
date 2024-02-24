#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Slack - Going to eat (miam)
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🍔
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true

// Documentation:
// @raycast.description Set Slack status to `🍔 miam`
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const slack = require('../lib');

return slack.status({
	emoji: '🍔',
	status: 'miam',
	expires: null
}).then((response) => {
	console.log('👍🏼');
	process.exit(0);
});
