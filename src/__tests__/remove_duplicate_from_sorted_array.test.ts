import { removeDuplicates } from "../remove_duplicate_from_sorted_array";

// test("Remove duplicate from sorted array", function () {
// 	const input = [1, 1, 2];
// 	const expected = [1, 2];
// 	const k = removeDuplicates(input);
// 	expect(k).toStrictEqual(expected.length);
// 	for (let i = 0; i < k; ++i) {
// 		expect(input[i]).toStrictEqual(expected[i]);
// 	}
// });

test("Remove duplicate from sorted array 2", function () {
	const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
	const expected = [0, 1, 2, 3, 4];
	const k = removeDuplicates(input);
	expect(k).toStrictEqual(expected.length);
	for (let i = 0; i < k; ++i) {
		expect(input[i]).toStrictEqual(expected[i]);
	}
});
