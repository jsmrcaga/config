#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Slack - Brain Fried
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🧠
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation true

// Documentation:
// @raycast.description Set a random slack status to signify brain is fried
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga
const slack = require('../lib');

const statuses = [{
	emoji: '🧟',
	status: 'This is Zack the Zombie, it ate my brain'
}, {
	emoji: '🧠',
	status: 'This is my brain. It is outside my body'
}, {
	emoji: '🍤',
	status: 'Shrimp brain'
}, {
	emoji: ':spongebob-mock:',
	status: 'jO Is thInKInG...'
}, {
	emoji: '🫠',
	status: 'Ice cream melts slower than my brain'
}, {
	emoji: '😵',
	status: 'If thinking was measured between -10 to 10, i\'d be at -50'
}, {
	emoji: '⚖️',
	status: 'current brain volume: 0ml.\nCurrent brain weight: 0g'
}];

const { emoji, status } = statuses[Math.floor(Math.random() * statuses.length)];

return slack.status({
	emoji,
	status,
	expires: null
}).then(() => {
	console.log(emoji);
	process.exit(0);
});
