function expandedForm(num) {
  const s = String(num);
  const parts = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '0') parts.push(s[i] + '0'.repeat(s.length - i - 1));
  }
  return parts.join(' + ');
}
