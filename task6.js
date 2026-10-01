function toWeirdCase(str) {
  return str.split(' ').map(word =>
    word.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('')
  ).join(' ');
}
