#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Slack - Back on
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🧙🏼
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true

// Documentation:
// @raycast.description Unset Slack status
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const slack = require('../lib');

return slack.status().then(() => {
	console.log('👍🏼');
	process.exit(0);
});
