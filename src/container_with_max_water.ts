function maxArea(height: number[]): number {
	let lpt = 0;
	let rpt = height.length - 1;
	let res = 0;
	while (lpt < rpt) {
		const area = (rpt - lpt) * Math.min(height[lpt], height[rpt]);
		res = Math.max(res, area);

		if (height[lpt] > height[rpt]) {
			rpt--;
		} else {
			lpt++;
		}
	}
	return res;
}

export { maxArea };
