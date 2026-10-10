#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title binary-to-text
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false
// @raycast.argument1 { "type": "text", "placeholder": "10011001 10011001", "percentEncoded": false, "optional": false, "secure": false }



// Documentation:
// @raycast.description Run any command
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const args = process.argv.slice(2); 
const [string_binary] = args;

if(!string_binary) {
	throw new Error('Please provide a binary string to convert');
}

let no_spaces = string_binary.replace(/\s/g, '');
let binary_characters = [];

for(let i = 0; i <= no_spaces.length; i += 8) {
	binary_characters.push(no_spaces.substr(i, 8));
}

console.log({binary_characters});

const ascii_string = binary_characters.map(binary => Number.parseInt(binary, 2)).map(char_code => String.fromCharCode(char_code)).join('');

console.log(ascii_string);

