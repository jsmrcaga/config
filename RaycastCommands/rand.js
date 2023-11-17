#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title rand
// @raycast.mode compact

// Arguments
// @raycast.argument1 { "type": "text", "placeholder": "32", "percentEncoded": false, "optional": true, "secure": false }

// Optional parameters:
// @raycast.icon 🎲
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false

// Documentation:
// @raycast.description Generates a random string of given length
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const Crypto = require('node:crypto');

const args = process.argv.slice(2); 
let [qtty = '32'] = args;
qtty = qtty || 32;
qtty = Number.parseInt(qtty, 10);

Crypto.randomBytes(qtty, (err, bytes) => {
	process.stdout.write(bytes.toString('base64').slice(0, qtty));
});

