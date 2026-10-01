function isCircleSorted(arr) {
  const n = arr.length;
  let drops = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[(i + 1) % n]) drops++;
  }
  return drops <= 1;
}
