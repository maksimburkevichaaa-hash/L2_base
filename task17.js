function cache(func) {
  const store = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (!store.has(key)) store.set(key, func.apply(this, args));
    return store.get(key);
  };
}
