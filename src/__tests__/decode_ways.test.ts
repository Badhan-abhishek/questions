import { numDecodings } from "../decode_ways";

const testCases: Array<[string, number]> = [
	["12", 2],
	["226", 3],
	["06", 0],
	["1", 1],
	["0", 0],
	["10", 1],
	["27", 1],
	["99", 1],
	["2101", 1],
]

describe("Decode ways", function () {
	testCases.map((i) => {
		const [tc, res] = i;
		it(`Decode Ways tc: ${tc} | res: ${res}`, function () {
			const result = numDecodings(tc);
			expect(result).toStrictEqual(res);
		});
	});
});
