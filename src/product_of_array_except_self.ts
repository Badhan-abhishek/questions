function productExceptSelf(nums: number[]): number[] {
	const prefixArr = new Array(nums.length).fill(1);

	prefixArr[0] = nums[0];

	for (let i = 1; i < nums.length; ++i) {
		prefixArr[i] = nums[i] * prefixArr[i - 1];
	}

	const suffixArr = new Array(nums.length).fill(1);
	suffixArr[suffixArr.length - 1] = nums[nums.length - 1];

	for (let i = nums.length - 2; i >= 0; --i) {
		suffixArr[i] = nums[i] * suffixArr[i + 1];
	}

	const result = new Array(nums.length).fill(1);

	for (let i = 0; i < nums.length; ++i) {
		const leftProd = i > 0 ? prefixArr[i - 1] : 1;
		const rightProd = i < nums.length - 1 ? suffixArr[i + 1] : 1;
		const fp = leftProd * rightProd;
		result[i] = !fp ? 0 : fp;
	}

	return result;
}

export { productExceptSelf };
