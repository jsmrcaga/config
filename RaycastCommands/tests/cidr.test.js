const { expect } = require('chai');
const { parse_cidr } = require('../cidr');

const test_cases = [{
	"cidr": "192.168.1.31/24",
	"min_ip": "192.168.1.0",
	"max_ip": "192.168.1.255",
	"mask": "255.255.255.0"
},
{
	"cidr": "10.0.0.50/8",
	"min_ip": "10.0.0.0",
	"max_ip": "10.255.255.255",
	"mask": "255.0.0.0"
},
{
	"cidr": "172.16.50.100/12",
	"min_ip": "172.16.0.0",
	"max_ip": "172.31.255.255",
	"mask": "255.240.0.0"
},
{
	"cidr": "192.168.1.1/32",
	"min_ip": "192.168.1.1",
	"max_ip": "192.168.1.1",
	"mask": "255.255.255.255"
},
{
	"cidr": "8.8.8.8/30",
	"min_ip": "8.8.8.8",
	"max_ip": "8.8.8.11",
	"mask": "255.255.255.252"
},
{
	"cidr": "1.2.3.4/22",
	"min_ip": "1.2.0.0",
	"max_ip": "1.2.3.255",
	"mask": "255.255.252.0"
},
{
	"cidr": "10.10.10.10/31",
	"min_ip": "10.10.10.10",
	"max_ip": "10.10.10.11",
	"mask": "255.255.255.254"
},
{
	"cidr": "0.0.0.0/0",
	"min_ip": "0.0.0.0",
	"max_ip": "255.255.255.255",
	"mask": "0.0.0.0"
},
{
	"cidr": "128.0.0.1/1",
	"min_ip": "128.0.0.0",
	"max_ip": "255.255.255.255",
	"mask": "128.0.0.0"
}];


describe('CIDR Parsing', () => {
	for(const { cidr, min_ip, max_ip, mask } of test_cases) {
		it(`should parse ${cidr}`, () => {
			const { ip_max, ip_min, mask: result_mask } = parse_cidr(cidr);

			expect(ip_min).to.be.eql(min_ip);
			expect(ip_max).to.be.eql(max_ip);
			expect(result_mask).to.be.eql(mask);
		});
	}
});
