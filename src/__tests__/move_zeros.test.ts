import { moveZeroes } from "../move_zeros";

describe("Move zeros", function () {
	it("Test case 1:", function () {
		const test = [0, 1, 0, 3, 12];
		moveZeroes(test);
		expect(test).toStrictEqual([1, 3, 12, 0, 0]);
	});

	it("Test case 2:", function () {
		const test = [0];
		moveZeroes(test);
		expect(test).toStrictEqual([0]);
	});

	it("Test case 3:", function () {
		const test = [0, 1, 0, 0, 0];
		moveZeroes(test);
		expect(test).toStrictEqual([1, 0, 0, 0, 0]);
	});

	it("Test case 4:", function () {
		const test = [1, 1, 1, 1];
		moveZeroes(test);
		expect(test).toStrictEqual([1, 1, 1, 1]);
	});

	it("Test case 5:", function () {
		const test = [0, 0, 1];
		moveZeroes(test);
		expect(test).toStrictEqual([1, 0, 0]);
	});
});
