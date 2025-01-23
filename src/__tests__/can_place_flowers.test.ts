import { canPlaceFlowers } from "../can_place_flowers";

const testCases: Array<[number[], number, boolean]> = [
	[[1, 0, 0, 0, 1], 1, true],
	[[1, 0, 0, 0, 1], 2, false],
];

test("Can place flowers", function () {
	testCases.map((testCase) => {
		const [flowerbed, n, expected] = testCase;
		const result = canPlaceFlowers(flowerbed, n)
		console.log("RESULT: ", flowerbed, n, result);
		expect(result).toEqual(expected);
	});
});
