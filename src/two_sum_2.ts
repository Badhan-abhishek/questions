function twoSum2(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (numbers[left] + numbers[right] !== target) {
    const sum = numbers[left] + numbers[right];
    if (sum > target) {
      --right;
    } else {
      ++left;
    }
  }
  return [left + 1, right + 1];
}

export { twoSum2 };
