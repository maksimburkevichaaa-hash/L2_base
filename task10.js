function bingo(ticket, win) {
  let total = 0;
  for (const [str, num] of ticket) {
    if (str.split('').map(c => c.charCodeAt(0)).includes(num)) total++;
  }
  return total >= win ? 'Winner!' : 'Loser!';
}
