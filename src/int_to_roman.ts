function intToRoman(num: number): string {
	const numMap: Array<[number, string]> = [
		[1, "I"],
		[4, "IV"],
		[5, "V"],
		[9, "IX"],
		[10, "X"],
		[40, "XL"],
		[50, "L"],
		[90, "XC"],
		[100, "C"],
		[400, "CD"],
		[500, "D"],
		[900, "CM"],
		[1000, "M"],
	];
	let result = "";
	while (numMap.length) {
		const item = numMap[numMap.length - 1];
		if (num === item[0]) {
			result += item[1];
			num = num % item[0];
			numMap.pop();
			continue;
		}
		const sm = Math.floor(num / item[0]);
		numMap.pop();
		if (sm < 1) {
			continue;
		}
		num = num % item[0];
		result += item[1].repeat(sm);
	}
	return result;
}

export { intToRoman };
