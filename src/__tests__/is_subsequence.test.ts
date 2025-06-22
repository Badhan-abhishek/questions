import { isSubsequence } from "../is_subsequence";

describe("is subsequence", function () {
	it("case 1: true", function () {
		expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
	});

	it("case 2: false", function () {
		expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
	});

	it("case 3: true", function () {
		expect(isSubsequence("aaaaa", "yyyyaaaayyyaaa")).toBeTruthy();
	});

	it("case 4: true", function () {
		expect(isSubsequence("", "yyyyaaaayyyaaa")).toBeTruthy();
	});
});
