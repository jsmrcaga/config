#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title format-csv
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 📖
// @raycast.packageName Jo - Scripts
// @raycast.needsConfirmation false
// @raycast.argument1 { "type": "text", "placeholder": "file or csv", "percentEncoded": false, "optional": false, "secure": false }
// @raycast.argument2 { "type": "text", "placeholder": "separator", "percentEncoded": false, "optional": true, "secure": false }

// Documentation:
// @raycast.description Format a CSV in a nice table
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

const fs = require('node:fs');

function parse_csv(csv_lines, separator=',') {
	const headers_line = csv_lines[0];
	const data = csv_lines.slice(1);

	// Does not support separator in values
	const headers = headers_line.split(separator);

	const data_lines = data.map(line => line.split(separator));

	// Initial value is the header length itself, for example "maximum" might
	// be longer than all the values in the table, like 4, 5, 6..
	let header_max_lengths = headers.reduce((lengths, header) => {
		if(!lengths[header] || header.length > lengths[header]) {
			lengths[header] = header.length;
		}

		return lengths;
	}, {});

	const parsed_csv = data_lines.reduce((result, data_points) => {
		const data_row = {}
		for(let i = 0; i < headers.length; i++) {
			// last line might be empty
			if(data_points.every(item => !item?.length)) {
				continue;
			}

			const key = headers[i];
			const value = data_points[i];

			if(!header_max_lengths[key] || value.length > header_max_lengths[key]) {
				header_max_lengths[key] = value.length;
			}

			data_row[key] = value;
		}

		result.push(data_row);
		return result;
	}, []);

	return {
		headers,
		header_max_lengths,
		parsed_csv
	};
}

const args = process.argv.slice(2); 
const [csv_or_file, separator=','] = args;

if(!csv_or_file) {
	throw new Error('Please provide a file location or full CSV to format');
}

const lines = csv_or_file.split('\n');

const is_file = lines.length === 1;

let csv;

if(is_file) {
	full_csv = fs.readFileSync(lines[0], 'utf8');
	csv = full_csv.split('\n');
} else {
	csv = lines;
}

const { headers, parsed_csv, header_max_lengths } = parse_csv(csv, separator);

console.table(parsed_csv);
