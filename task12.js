function longest(arr, n) {
  return arr
    .map((s, i) => ({ s, i }))
    .sort((a, b) => b.s.length - a.s.length || a.i - b.i)[n - 1].s;
}
