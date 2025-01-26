const reverseWords = (s: string): string => {
	let h = s.length - 1;
	let res = "";
	let sw = "";

	while (h >= 0) {
		const isWord = !s[h] || s[h] !== " ";
		if (isWord) {
			sw = `${s[h]}${sw}`;
		}

		if ((h === 0 || !isWord) && sw !== "") {
			if (res !== "") sw = ` ${sw}`;
			res += sw;
			sw = "";
		}
		--h;
	}

	return res;
};

export { reverseWords };
