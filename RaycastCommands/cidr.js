#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title cidr
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🖥️
// @raycast.packageName Jo - Test
// @raycast.needsConfirmation false
// @raycast.argument1 { "type": "text", "placeholder": "10.10.10.10/24", "percentEncoded": false, "optional": false, "secure": false }

// Documentation:
// @raycast.description A command to get IP ranges from CIDR block
// @raycast.author Jo Colina
// @raycast.authorURL https://github.com/jsmrcaga

function human_readable_ip(ip_int) {
	const b8 = 0xFF;
	return `${ip_int >> 24 & b8}.${ip_int >> 16 & b8}.${ip_int >> 8 & b8}.${ip_int >> 0 & b8}`;
}

function parse_cidr(ip_cidr) {
	const [ip, mask_str] = ip_cidr.split('/');

	// Extract individual binary pieces
	const [a, b, c, d] = ip.split('.').map(i => Number.parseInt(i, 10));

	// Get the binary representation of the mask
	const bits_32 = 0xFFFFFFFF;
	const mask_int = Number.parseInt(mask_str, 10);

	// We don't need the mask because we compute it from
	// the wildcard. This takes into account /0 and /32

	// The magic >>> re-casts the number to unsigned
	// const mask = bits_32 << (32 - mask_int) >>> 0;
	const max_mask_binary = 2**(32 - mask_int)
	// const wildcard = ~mask >>> 0;
	const wildcard = max_mask_binary - 1;


	const ip_int = (a * 256**3) + (b * 256**2) + (c * 256 ** 1) + (d * 256 ** 0);
	ip_min = ip_int & ~wildcard;
	ip_max = ip_min | wildcard;

	return {
		ip_min: human_readable_ip(ip_min),
		ip_max: human_readable_ip(ip_max),
		mask: human_readable_ip(~wildcard),
		wildcard: human_readable_ip(wildcard)
	};
};

if(require.main === module) {
	const [ ip_cidr ] = process.argv.slice(2);
	const { ip_min, ip_max, mask } = parse_cidr(ip_cidr);
	console.log(ip_min, ip_max, mask);
}

module.exports = { parse_cidr };
