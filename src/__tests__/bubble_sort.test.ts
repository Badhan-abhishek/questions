import { bubbleSort } from "../bubble_sort";
import { SORTED1, SORTED2, ARR2, ARR1 } from "../data/array";

test("Bubble sort", function () {
  const result1 = bubbleSort(ARR1);
  expect(result1).toStrictEqual(SORTED1);

  const result2 = bubbleSort(ARR2);
  expect(result2).toStrictEqual(SORTED2);
});
