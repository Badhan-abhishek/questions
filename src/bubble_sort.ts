/**
 * Bubble Sort:
 *  - Bubble sort is algorithm with best case time complexity of O(n^2).
 *  - Bubble sort iterate over same and array and swap smaller value with bigger value
 *
 * Working:
 *  - In Bubble sort we compare the element nth element of array with (n+1)th element.
 *  - If the nth element is greater than (n+1)th element of array we swap their places.
 *
 *
 *
 */
function bubbleSort(arr: number[]) {
  let swapped = false;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

export { bubbleSort };
