import { intToRoman } from "../int_to_roman";

describe("Convert int to roman", () => {
	it("3749", () => {
		const result = intToRoman(3749);
		expect(result).toEqual("MMMDCCXLIX");
	});

	it("58", () => {
		const result = intToRoman(58);
		expect(result).toEqual("LVIII");
	});

	it("5", () => {
		const result = intToRoman(5);
		expect(result).toEqual("V");
	});

	it("1994", () => {
		const result = intToRoman(1994);
		expect(result).toEqual("MCMXCIV");
	});
});
