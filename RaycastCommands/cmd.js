#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title cmd
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🎮
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true
// @raycast.argument1 { "type": "text", "placeholder": "Command", "percentEncoded": false, "optional": false, "secure": false }


// Documentation:
// @raycast.description Run any command
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const Process = require('child_process');

const args = process.argv.slice(2); 
const [command] = args;

if(!command) {
	throw new Error('No command provided');
}


const result = Process.execSync(command);
console.log(result.toString('utf8'));
