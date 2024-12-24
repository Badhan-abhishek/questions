import { twoSum2 } from "../two_sum_2";

const NUMS1 = [2, 7, 11, 15];
const TARGET1 = 9;
const RESULT1 = [1, 2];

const NUMS2 = [2, 3, 4];
const TARGET2 = 6;
const RESULT2 = [1, 3];

const NUMS3 = [-1, 0];
const TARGET3 = -1;
const RESULT3 = [1, 2];

test("Two sum", function () {
  const result1 = twoSum2(NUMS1, TARGET1);
  expect(result1.length).toEqual(2);
  result1.map((i) => expect(RESULT1).toContain(i));

  const result2 = twoSum2(NUMS2, TARGET2);
  expect(result2.length).toEqual(2);
  result2.map((i) => expect(RESULT2).toContain(i));

  const result3 = twoSum2(NUMS3, TARGET3);
  expect(result3.length).toEqual(2);
  result3.map((i) => expect(RESULT3).toContain(i));
});
