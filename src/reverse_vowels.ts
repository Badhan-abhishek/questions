const s = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

function isVowel(t: string) {
	return s.has(t);
}

function reverseVowels(s: string): string {
	const sr = s.split("");
	let left = 0;
	let right = sr.length - 1;

	while (left < right) {
		if (isVowel(sr[left]) && isVowel(sr[right])) {
			[sr[left], sr[right]] = [sr[right], sr[left]];
			++left;
			--right;
		} else {
			if (!isVowel(sr[left])) {
				++left;
			}
			if (!isVowel(sr[right])) {
				--right;
			}
		}
	}

	return sr.join("");
}

export { reverseVowels };
