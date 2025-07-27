#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title hash
// @raycast.mode compact

// Optional parameters:
// @raycast.icon #️⃣
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false
// @raycast.argument1 { "type": "text", "placeholder": "String", "percentEncoded": false, "optional": false, "secure": false }
// @raycast.argument2 { "type": "dropdown", "placeholder": "Hash", "percentEncoded": false, "optional": true, "data": [{ "title": "sha-256", "value": "sha-256" }, { "title": "sha-1", "value": "sha-1" }, { "title": "MD5", "value": "md5" }]  }
// @raycast.argument3 { "type": "dropdown", "placeholder": "Encoding", "percentEncoded": false, "optional": true, "data": [{ "title": "Base64", "value": "base64" }, { "title": "Hex", "value": "hex" }]  }

// Documentation:
// @raycast.description Compute SHA256
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const Crypto = require('crypto');

const args = process.argv.slice(2); 
let [string, algorithm='sha-256', encoding='hex'] = args;

// Raycast sends empty string
if(!algorithm) {
	algorithm = 'sha-256';
}

if(!encoding) {
	encoding = 'hex';
}

const hash = Crypto.createHash(algorithm);
hash.update(string);

console.log(hash.digest(encoding));
