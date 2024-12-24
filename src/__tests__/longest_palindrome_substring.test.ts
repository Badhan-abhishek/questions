import { longestPalindromeSubstring } from "../longest-palindrome-substring";

const cases = [
  {
    value: "babad",
    result: "bab",
  },
  {
    value: "cbbd",
    result: "bb",
  },
];

test("Longest palindromic substring", function () {
  cases.map((item) => {
    expect(longestPalindromeSubstring(item.value)).toEqual(item.result);
  });
});
