const VALID_CHMOD = /^((r|-)(w|-)(x|-)){3}$/;

const UNSET = '-'

class Chmod {
	#encode_character(x) {
		if(x === UNSET) {
			return 0;
		}

		return 1;
	}

	#encode_group(a, b, c) {
		const group = [
			this.#encode_character(a),
			this.#encode_character(b),
			this.#encode_character(c),
		].join('');

		return Number.parseInt(group, 2);
	}

	encode(chmod_string) {
		if(!VALID_CHMOD.test(chmod_string)) {
			throw new Error('Invalid chmod string');
		}

		const [
			ur, uw, ux,
			gr, gw, gx,
			pr, pw, px,
		] = chmod_string.split('');

		const u = this.#encode_group(ur, uw, ux);
		const g = this.#encode_group(gr, gw, gx);
		const p = this.#encode_group(pr, pw, px);

		return `0${u}${g}${p}`;
	}

	#decode_group(group_nb) {
		const binary = Number.parseInt(group_nb, 10).toString(2);
		const [r, w, x] = binary.split('');
		return [
			+r ? 'r' : '-',
			+w ? 'w' : '-',
			+x ? 'x' : '-'
		].join('');
	}

	decode(chmod_number) {
		const [u, g, p] = chmod_number.toString().split('');

		const u_str = this.#decode_group(u);
		const g_str = this.#decode_group(g);
		const p_str = this.#decode_group(p);

		return [u_str, g_str, p_str].join('');
	}
}

const chmod = new Chmod();
module.exports = chmod;
