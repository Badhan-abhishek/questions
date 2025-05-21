import { mergeSortedArrays } from "../merge_sorted_arrays";

const testCases: Array<
	[Array<number>, number, Array<number>, number, Array<number>]
> = [
	[[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
	[[1], 1, [], 0, [1]],
	[[0, 1, 2, 4, 0, 0], 4, [2, 6], 2, [0, 1, 2, 2, 4, 6]],
	[[1, 2, 4, 5, 6, 0], 5, [3], 1, [1, 2, 3, 4, 5, 6]],
];

test("merge sorted arrays", function () {
	for (const item of testCases) {
		const [arr1, m, arr2, n, result] = item;
		mergeSortedArrays(arr1, m, arr2, n);
		console.log("ARRR", arr1);
		expect(arr1).toStrictEqual(result);
	}
});
