import { Palindrome } from "../palindrome";

const TEST1_P = "bab";

const TEST2_P = "RaceCar";

const TEST3_P = "A man a plan a canal Panama";

const TEST1_N = "hello";

const TEST2_N = "world";

const TEST3_N = "python";

test("Is Palindrome", function () {
  expect(Palindrome(TEST1_P)).toStrictEqual(true);
  expect(Palindrome(TEST2_P)).toStrictEqual(true);
  expect(Palindrome(TEST3_P)).toStrictEqual(true);

  expect(Palindrome(TEST1_N)).toStrictEqual(false);
  expect(Palindrome(TEST2_N)).toStrictEqual(false);
  expect(Palindrome(TEST3_N)).toStrictEqual(false);
});
