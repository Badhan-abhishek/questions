function removeDuplicates(nums: number[]): number {
	const items: Record<number, number> = {};
	let i = 0;
	while (i <= nums.length) {
		if (items[nums[i]] >= 1) {
			nums.splice(i, 1);
			items[nums[i]] += 1;
		} else {
			if (!items[nums[i]]) {
				items[nums[i]] = 1;
			} else {
				items[nums[i]] += 1;
			}
			i += 1;
		}
	}
	return nums.length;
}

export { removeDuplicates };
