function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > second) {
      second = arr[i];
    }
  }

  return second === -Infinity ? null : second;
}

console.log(findSecondLargest([10, 20, 20, 5]));
