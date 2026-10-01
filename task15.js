function howManyTimes(time1, time2) {
  const parse = s => new Date(s.replace(' ', 'T') + 'Z');
  const start = parse(time1);
  const end = parse(time2);

  let mark = new Date(start);
  mark.setUTCSeconds(0, 0);
  mark.setUTCMinutes(mark.getUTCMinutes() >= 30 ? 30 : 0);

  let total = 0;
  while (mark < end) {
    const isHour = mark.getUTCMinutes() === 0;
    const h = mark.getUTCHours() % 12;
    const n = isHour ? (h === 0 ? 12 : h) : 1;
    const strikeEnd = new Date(mark.getTime() + n * 1000);

    const overlapStart = new Date(Math.max(mark, start));
    const overlapEnd = new Date(Math.min(strikeEnd, end));
    if (overlapEnd > overlapStart) {
      total += (overlapEnd - overlapStart) / 1000;
    }
    mark = new Date(mark.getTime() + 30 * 60 * 1000);
  }
  return total;
}
