function matrixMultiplication(a, b) {
  const res = a.map(_ => b[0].map(_ => 0));

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      for (let n = 0; n < a[0].length; n++) {
        res[i][j] += a[i][n] * b[n][j];
      }
    }
  }

  return res;
}
