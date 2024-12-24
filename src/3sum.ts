function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  let currentIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (result[currentIdx].length === 3) {
      currentIdx++;
    }
  }

  return [[]];
}

export { threeSum };
