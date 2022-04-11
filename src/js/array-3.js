(function () {
  /**
   * @Title: Array of anything
   */

  lb(false, 'Array Of Anything', true);

  // Array of Function
  lb('red', 'Array of Function');
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const times = (a, b) => a * b;
  const div = (a, b) => a / b;
  const mod = (a, b) => a % b;

  const funcs = [sum, sub, times, div, mod];
  const a = 900,
    b = 681;

  for (let i = 0; i < funcs.length; i++) {
    const result = funcs[i](a, b);
    console.log(`[${funcs[i].name}] Result = ${result}`);
  }

  // Array of Arrays
  lb(false, 'Array of Arrays', true);

  const pointTable = [
    [0, 9],
    [11, 26],
    [9, 11],
    [75, 45],
  ];

  // One Dimensional Traverse
  lb('red', 'One Dimensional Traverse');
  for (let i = 0; i < pointTable.length; i++) {
    console.log(
      `Point ${i} - x = ${pointTable[i][0]} and y = ${pointTable[i][1]}`
    );
  }

  // Two Dimensional Traverse
  lb('red', 'Two Dimensional Traverse');
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      console.log(numbers[i][j]);
    }
  }

  // Matrix Example
  lb('red', 'Matrix Example');
  const matrixA = [
    [1, 3],
    [1, 0],
    [1, 2],
  ];

  const matrixB = [
    [0, 0],
    [2, 6],
    [4, 5],
  ];

  const matrixSum = (matrixA, matrixB) => {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
      const row = [];
      for (let j = 0; j < matrixA[i].length; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
      }
      result.push(row);
    }
    return result;
  };

  console.log(matrixSum(matrixA, matrixB));
})();
