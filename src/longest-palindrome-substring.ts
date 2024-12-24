function checkPalindrome(s: string, lIdx: number, rIdx: number): string {
	while (lIdx >= 0 && rIdx < s.length && s[lIdx] === s[rIdx]) {
		lIdx--;
		rIdx++;
	}
	return s.substring(lIdx + 1, rIdx);
}

function longestPalindromeSubstring(s: string): string {
	let longest = "";
	for (let i = 0; i < s.length; ++i) {
		const evenPalindrome = checkPalindrome(s, i, i);
		const oddPalindrome = checkPalindrome(s, i, i + 1);
		if (longest.length < evenPalindrome.length) {
			longest = evenPalindrome;
		}
		if (longest.length < oddPalindrome.length) {
			longest = oddPalindrome;
		}
	}
	return longest;
}

export { longestPalindromeSubstring };
