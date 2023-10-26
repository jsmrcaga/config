#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title pswd
// @raycast.mode inline

// Optional parameters:
// @raycast.icon 📆
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false


// Documentation:
// @raycast.description Generate a random 32char password
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const [ascii_min, ascii_max] = [33, 126];
const ignored_chars = [':', '\\', ';', ',', '.', '"', '\''];

const random_char = () => (Math.random() * (ascii_max - ascii_min)) + ascii_min;

const password = new Array(32).fill(0).map(() => {
	let char_index = random_char();
	while(ignored_chars.includes(String.fromCharCode(char_index))) {
		char_index = random_char();
	}

	return String.fromCharCode(Math.floor(char_index));
}).join('');

console.log(password);

