import { KidsWithTheGreatestNumberOfCandies } from "../kids_with_the_greatest_number_of_candies";

const testCases: Array<[number[], number, boolean[]]> = [
	[[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
	[[12, 1, 12], 10, [true, false, true]],
	[[2,3,5,1,3], 3, [true,true,true,false,true]]
];

test("Kids with the greatest number of candies", function () {
	testCases.forEach((item) => {
		const [candies, extraCandies, result] = item;
		expect(
			KidsWithTheGreatestNumberOfCandies(candies, extraCandies),
		).toStrictEqual(result);
	});
});
