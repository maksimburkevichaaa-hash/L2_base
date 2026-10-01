function domainName(url) {
  const host = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  return host.split('.')[0];
}
