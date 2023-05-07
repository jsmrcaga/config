#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title fb64
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 💻
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false
// @raycast.argument1 { "type": "text", "placeholder": "example", "percentEncoded": false, "optional": false, "secure": false }



// Documentation:
// @raycast.description Run any command
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const args = process.argv.slice(2); 
const [string_b64] = args;

if(!string_b64) {
	throw new Error('Please provide a bas64-encoded string to convert');
}

console.log(Buffer.from(string_b64, 'base64').toString('utf-8'));
