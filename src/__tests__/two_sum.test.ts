import { twoSum } from "../two_sum";

const NUMS1 = [2, 7, 11, 15];
const TARGET1 = 9;
const RESULT1 = [0, 1];

const NUMS2 = [3, 2, 4];
const TARGET2 = 6;
const RESULT2 = [1, 2];

const NUMS3 = [3, 3];
const TARGET3 = 6;
const RESULT3 = [0, 1];

test("Two sum", function () {
  const result1 = twoSum(NUMS1, TARGET1);
  expect(result1.length).toEqual(2);
  result1.map((i) => expect(RESULT1).toContain(i));

  const result2 = twoSum(NUMS2, TARGET2);
  expect(result2.length).toEqual(2);
  result2.map((i) => expect(RESULT2).toContain(i));

  const result3 = twoSum(NUMS3, TARGET3);
  expect(result3.length).toEqual(2);
  result3.map((i) => expect(RESULT3).toContain(i));
});
