function sortedFrequency(arr, val) {
  const value = arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  return value !== 0 ? value : -1 
}

module.exports = sortedFrequency;
