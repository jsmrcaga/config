#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Slack - Setup Token
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🛠️
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true
// @raycast.argument1 { "type": "text", "placeholder": "Slack Token", "percentEncoded": false }


// Documentation:
// @raycast.description Setup Slack Raycast config
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const local_config = require('../lib/local-config');

const args = process.argv.slice(2); 
const [slack_token] = args;

return local_config.append_config({
	slack_token
}).then(() => {
	console.log('Done!');
	process.exit(0);
}).catch(e => {
	console.error(e);
	process.exit(1);
});
