#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title uuid
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon ⚡️
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false

// Documentation:
// @raycast.description A command to test raycast commands
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const uuid = () => {
	// Random byte
	const rbyte = () => Math.floor(Math.random() * 255);
	// Leftpad
	const rbytes = () => ('00000000' + rbyte().toString(2)).slice(-8);
	const uuid_blocks = Array(16).fill(0).map(i => rbytes());
	// 4 most significant bits of 7th byte to 0100
	uuid_blocks[6] = '0100' + uuid_blocks[6].slice(-4);
	// two most significant bits of the 9th byte to 10
	uuid_blocks[8] = '10' + uuid_blocks[6].slice(-6);

	const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p] = uuid_blocks.map(byte => {
		const hex = parseInt(byte, 2).toString(16);
		// leftpad
		return ('00' + hex).slice(-2);
	});
	return `${a}${b}${c}${d}-${e}${f}-${g}${h}-${i}${j}-${k}${l}${m}${n}${o}${p}`;
};


console.log(uuid());
