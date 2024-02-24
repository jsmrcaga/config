#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Off for the day on Slack (zzz)
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 😴
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true

// Documentation:
// @raycast.description Set Slack status to `😴`
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const slack = require('../lib');

return slack.status({
	emoji: '😴',
	status: '',
	expires: null
}).then(() => {
	console.log('👍🏼');
	process.exit(0);
});
