export const turnOrder = (): number => {
  if (Math.round(Math.random()) === 0) {
    return 0;
  } else {
    return 1;
  }
}
