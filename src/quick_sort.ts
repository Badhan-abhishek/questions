/**
 * Quick sort:
 *  - Quick sort is sorting algorithm with O(n\*log(n)) time complexity in the best case
 *  and O(n^2) in worst case.
 *  - Quick sort uses recursion to sort through array.
 *
 *  - Quick sort is divide and conquer algorithm
 *
 * Working:
 *  - Quick sort uses pivot as starting point. Pivot can be any element present in array.
 *    For example we used 0th element of array as pivot.
 *  - We iterate over array and use pivot as anchor to compare values. If value is less than
 *    pivot, we push that value to leftArr. If value is greater than pivot we push that value
 *    to rightArr.
 *  - Now we repeat this step with left and right arrays.
 *  - In the end we return array with all the values from left array, pivot and all the values
 *    from right array. Pivot is in the center because we use pivot as anchor point.
 *
 */
function quicksort(arr: number[]): number[] {
  return walk(arr);
}

function walk(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  const pivot = arr[0];

  // NOTE: Here we start from 1 because 0th element is already accounted by pivot
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...walk(leftArr), pivot, ...walk(rightArr)];
}

export { quicksort };
