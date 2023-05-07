#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title tb64
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
const [string] = args;

if(!string) {
	throw new Error('Please provide a string to convert');
}

console.log(Buffer.from(string).toString('base64'));
