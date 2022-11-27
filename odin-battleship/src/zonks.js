function range(startAt = 0, size, step) {
  if (!step) {
    step =  1;
  };
  return [...Array(size).keys()].map((i) => i * step + startAt);
}

export { range };
