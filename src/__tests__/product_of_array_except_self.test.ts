import { productExceptSelf } from "../product_of_array_except_self";

const testCases = [
	[
		[1, 2, 3, 4],
		[24, 12, 8, 6],
	],
	[
		[-1, 1, 0, -3, 3],
		[0, 0, 9, 0, 0],
	],
	[
		[1, -1],
		[-1, 1],
	],
];

test("Product of array except self", function () {
	testCases.map((t) => {
		const [ts, res] = t;
		expect(productExceptSelf(ts)).toStrictEqual(res);
	});
});
