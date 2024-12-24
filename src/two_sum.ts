function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  const values: Record<number, number> = {};
  for (let i = 0; i < nums.length; ++i) {
    const value = target - nums[i];
    const currValue = values[value];
    if (currValue >= 0 && currValue !== i) {
      result = [i, currValue];
      break;
    }
    values[nums[i]] = i;
  }
  return result;
}

export { twoSum };
