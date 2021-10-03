function findRotationCount(arr) {
  let min = arr[0],
    min_index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      min_index = i;
    }
  }
  return min_index > 0 ? min_index : 0;
}

module.exports = findRotationCount;
