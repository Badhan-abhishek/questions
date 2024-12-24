import { maxPoints } from "../points_with_costs";

const TEST1 = [
  [1, 2, 3],
  [1, 5, 1],
  [3, 1, 1],
];
const RESULT1 = 9;

const TEST2 = [
  [1, 5],
  [2, 3],
  [4, 2],
];

const RESULT2 = 11;

const TEST3 = [[1, 2, 3]];

const RESULT3 = 3;

const TEST4 = [
  [0, 3, 0, 4, 2],
  [5, 4, 2, 4, 1],
  [5, 0, 0, 5, 1],
  [2, 0, 1, 0, 3],
];
const RESULT4 = 15;

const TEST5 = [
  [1, 5],
  [3, 2],
  [4, 2],
];
const RESULT5 = 11;

const TEST6 = [[3], [4], [2], [0]];
const RESULT6 = 9;

test("Maximum Number of Points with Cost", function () {
  expect(maxPoints(TEST1)).toEqual(RESULT1);
  expect(maxPoints(TEST2)).toEqual(RESULT2);
  expect(maxPoints(TEST3)).toEqual(RESULT3);
  expect(maxPoints(TEST4)).toEqual(RESULT4);
  expect(maxPoints(TEST5)).toEqual(RESULT5);
  expect(maxPoints(TEST6)).toEqual(RESULT6);
});
