#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title isodate
// @raycast.mode inline

// Optional parameters:
// @raycast.icon 📆
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false


// Documentation:
// @raycast.description Get an ISOString date
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

console.log(new Date().toISOString());
