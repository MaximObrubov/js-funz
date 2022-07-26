function matrixMultiplication(a, b) {
  const size = a.length;
  // Initialize another way for not squared matrixes
  const res = (new Array(size)).fill(null).map(n => new Array(size).fill(0));
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let n = 0; n < size; n++) {
        res[i][j] += a[i][n] * b[n][j];
      }
    }
  }

  return res;
}
