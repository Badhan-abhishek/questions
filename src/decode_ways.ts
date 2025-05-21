function numDecodings(s: string): number {
	const n = s.length;
	const dp = new Array(n + 1).fill(0);
	dp[0] = 1;
	dp[1] = s[0] === "0" ? 0 : 1;
	for (let i = 2; i <= n; ++i) {
		const singleDigit = parseInt(s.slice(i - 1, i));
		const twoDigit = parseInt(s.slice(i - 2, i));
		if (singleDigit >= 1 && singleDigit <= 9) {
			dp[i] += dp[i - 1];
		}
		if (twoDigit >= 10 && twoDigit <= 26) {
			dp[i] += dp[i - 2];
		}
	}
	return dp[n];
}

export { numDecodings };
