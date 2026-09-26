function ipv4Parser(ip, mask) {
  const ipParts = ip.split('.').map(Number);
  const maskParts = mask.split('.').map(Number);
  const network = ipParts.map((p, i) => p & maskParts[i]);
  const host = ipParts.map((p, i) => p & (~maskParts[i] & 255));
  return [network.join('.'), host.join('.')];
}
