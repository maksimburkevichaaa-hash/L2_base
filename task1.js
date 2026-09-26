function hasTwoCubeSums(n) {
  const pairs = [];
  for (let a = 1; a ** 3 < n; a++) {
    for (let b = a + 1; a ** 3 + b ** 3 <= n; b++) {
      if (a ** 3 + b ** 3 === n) pairs.push([a, b]);
    }
  }
  return pairs.length >= 2;
}
