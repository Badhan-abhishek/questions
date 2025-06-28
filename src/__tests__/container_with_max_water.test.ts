import { maxArea } from "../container_with_max_water";

describe("Container with max water", function () {
	it("Result: 49", function () {
		const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
		expect(maxArea(height)).toEqual(49);
	});

	it("Result: 1", function () {
		const height = [1, 1];
		expect(maxArea(height)).toEqual(1);
	});
});
