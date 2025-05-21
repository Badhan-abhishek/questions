import { reverseVowels } from "../reverse_vowels";

const testCases = [
	["IceCreAm", "AceCreIm"],
	["leetcode", "leotcede"],
	["race car", "race car"],
	["ai", "ia"],
	["aA", "Aa"],
	["Euston saw I was not Sue.", "euston saw I was not SuE."],
];

test("Reverse vowels", function () {
	testCases.map((item) => {
		const [tc, res] = item;
		expect(reverseVowels(tc)).toStrictEqual(res);
	});
});
