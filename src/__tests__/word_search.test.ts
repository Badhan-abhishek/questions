import { exist } from "../word_search";

const Cases = [
	{
		c: [
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		word: "ABCCED",
		result: true,
	},
	{
		c: [
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		word: "SEE",
		result: true,
	},
	{
		c: [
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		word: "ABCB",
		result: false,
	},
];

test("Search word", function () {
	for (let i = 0; i < Cases.length; ++i) {
		const item = Cases[i];
		const re = exist(item.c, item.word);
		expect(re).toStrictEqual(item.result);
	}
});
