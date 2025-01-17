import { mergeAlternately } from "../merge_string_alternately";

const arg1 = ["abc", "pqr", "apbqcr"];
const arg2 = ["ab", "pqrs", "apbqrs"];

const arg3 = ["abcd", "pq", "apbqcd"];

test("Merge strings alternately", function () {
	const result = mergeAlternately(arg1[0], arg1[1]);
	expect(result).toBe(arg1[2]);

	const result2 = mergeAlternately(arg2[0], arg2[1]);
	expect(result2).toBe(arg2[2]);

	const result3 = mergeAlternately(arg3[0], arg3[1]);
	expect(result3).toBe(arg3[2]);
});
