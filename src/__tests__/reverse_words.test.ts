import { reverseWords } from "../reverse_words";

const testCases = [
	["the sky is blue", "blue is sky the"],
	["  hello world  ", "world hello"],
	["a good   example", "example good a"],
	["EPY2giL", "EPY2giL"]
];

test("Reverse words", () => {
	testCases.map((item) => {
		const [str, exp] = item;
		expect(reverseWords(str)).toStrictEqual(exp);
	});
});
