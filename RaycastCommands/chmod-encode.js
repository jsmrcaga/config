#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title chmod-encode
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🛂
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false
// @raycast.argument1 { "type": "text", "placeholder": "rwx---rw-", "percentEncoded": false, "optional": false, "secure": false }


// Documentation:
// @raycast.description Encode a string to a chmod value
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const chmod = require('./lib/chmod/chmod');

const args = process.argv.slice(2); 
const [chmod_string] = args;

console.log(chmod.encode(chmod_string));
