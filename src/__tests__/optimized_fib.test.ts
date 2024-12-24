import { getFib } from "../optimized_fib";

const ARG1 = 4;
const RESULT1 = [0, 1, 1, 2];

const ARG2 = 10;
const RESULT2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

test("Optimized fib", function () {
  const result1 = getFib(ARG1);
  result1.map((i) => expect(RESULT1).toContain(i));

  const result2 = getFib(ARG2);
  result2.map((i) => expect(RESULT2).toContain(i));
});
