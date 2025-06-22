// Status: DONE

function _isSubsequenceSlow(s: string, t: string): boolean {
	const sarr = s.split("");
	let idx = sarr.length - 1;
	for (let i = t.length - 1; i >= 0; --i) {
		if (t[i] === s[idx]) {
			sarr.pop();
			if (sarr.length === 0) break;
			idx--;
		}
	}
	return sarr.length === 0;
}

function isSubsequenceFast(s: string, t: string): boolean {
	for (let i = 0; i < t.length; i++) {
		if (s === "") return true;
		if (s[0] === t[i]) {
			s = s.substring(1, s.length);
		}
	}
	return s.length === 0;
}

export { isSubsequenceFast as isSubsequence };
