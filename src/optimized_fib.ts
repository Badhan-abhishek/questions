function getFib(n: number) {
  const memo: number[] = new Array(n + 1).fill(0); // create empty array with n+1 length
  const result: number[] = [];
  for (let i = 0; i < n; ++i) {
    result.push(fib(i, memo));
  }
  return result;
}

function fib(n: number, memo: number[]) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  else if (memo[n] > 0) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

export { getFib };
