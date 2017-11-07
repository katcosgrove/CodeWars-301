function cubeOdd(arr) {
  if (arr.some(item => typeof item !== 'number')) {
    return undefined;
  }
  return arr.filter(item => item % 2 !== 0).map(item => item*item*item).reduce((a, b) => a + b, 0);
}
