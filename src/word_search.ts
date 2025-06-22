function walk(
	board: string[][],
	visited: Set<string>,
	total: number[],
	x: number,
	y: number,
) {
	if (!total.length) return;
}

function exist(board: string[][], word: string): boolean {
	const visited = new Set<string>();
	const total = new Array<number>(word.length).fill(0);
	walk(board, visited, total, 0, 0);
	return false;
}

export { exist };
