function getMaxRow(row1: number[], row2: number[]) {
  const values: number[] = new Array(row2.length).fill(0);
  for (let i = 0; i < row2.length; ++i) {
    const firstValue = row2[i];
    for (let j = 0; j < row1.length; ++j) {
      const distance = Math.abs(j - i);
      const nextValue = firstValue + row1[j] - distance;
      if (nextValue > values[i]) {
        values[i] = nextValue;
      }
    }
  }
  return values;
}

function getMax(values: number[]) {
  let max = 0;
  for (let i = 0; i < values.length; ++i) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  return max;
}

// NOTE: Currently fails with TLE on bigger arrays,
// have to use DP inside DP. Not smart enough right now
export function maxPoints(points: number[][]): number {
  let values: number[] = points[0];
  if (points.length > 1) {
    for (let i = 1; i < points.length; ++i) {
      const prevRow = values.length > 0 ? values : points[i - 1];
      const currRow = points[i];
      values = getMaxRow(prevRow, currRow);
    }
  }
  return getMax(values);
}
