import { quicksort } from "../quick_sort";
import { SORTED1, SORTED2, ARR2, ARR1 } from "../data/array";

test("Quicksort", function () {
  const result1 = quicksort(ARR1);
  expect(result1).toStrictEqual(SORTED1);

  const result2 = quicksort(ARR2);
  expect(result2).toStrictEqual(SORTED2);
});
