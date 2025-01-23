function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let isPreviousEmpty = true;
	for (let i = 0; i < flowerbed.length; ++i) {
		const nextIdx = i + 1;
		const current = flowerbed[i];
		if (nextIdx === flowerbed.length) {
			if (isPreviousEmpty && !current) {
				--n;
			}
			continue;
		}
		const next = flowerbed[nextIdx];
		if (current) {
			isPreviousEmpty = false;
			continue;
		}
		if (isPreviousEmpty && !current && !next) {
			--n;
			isPreviousEmpty = false;
			continue;
		}
		if (!isPreviousEmpty && !current) {
			isPreviousEmpty = true;
		}
	}
	return n < 1;
}

export { canPlaceFlowers };
