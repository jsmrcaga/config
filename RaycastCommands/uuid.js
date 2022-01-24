#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title uuid
// @raycast.mode inline

// Optional parameters:
// @raycast.icon ⚡️
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false

// Documentation:
// @raycast.description A command to test raycast commands
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const Crypto = require('crypto');
console.log(Crypto.randomUUID());
