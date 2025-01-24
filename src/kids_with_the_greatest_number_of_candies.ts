function getMax(arr: number[]) {
	let max = arr[0];
	for (let i = 1; i < arr.length; ++i) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

export function KidsWithTheGreatestNumberOfCandies(
	candies: number[],
	extraCandies: number,
): boolean[] {
	const max = getMax(candies);
	const result: boolean[] = [];
	for (let i = 0; i < candies.length; i++) {
		result.push(candies[i] + extraCandies >= max);
	}
	return result;
}
