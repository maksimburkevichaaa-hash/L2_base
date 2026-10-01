function whatCentury(year) {
  const century = Math.ceil(parseInt(year, 10) / 100);
  const lastTwo = century % 100;
  const last = century % 10;
  let suffix = 'th';
  if (lastTwo < 11 || lastTwo > 13) {
    if (last === 1) suffix = 'st';
    else if (last === 2) suffix = 'nd';
    else if (last === 3) suffix = 'rd';
  }
  return century + suffix;
}
