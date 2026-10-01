function findMissing(arr) {
  const d = (arr[arr.length - 1] - arr[0]) / arr.length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== d) return arr[i - 1] + d;
  }
}
