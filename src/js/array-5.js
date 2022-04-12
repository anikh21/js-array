(function () {
  /**
   * @Title: Delete Specific Element
   */

  lb(false, 'Delete Specific Element', true);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Original Array
  lb('red', ' Original Array');

  console.log(numbers);

  // Remove First Element
  lb('red', 'Remove First Element');
  numbers.shift();
  console.log(numbers);

  // Remove Last Element
  lb('red', 'Remove Last Element');

  numbers.pop();
  numbers.length = numbers.length - 1;
  console.log(numbers);

  // Remove Inside Element - Splice using index
  lb('red', 'Remove Inside Element - Splice using index');

  numbers.splice(4, 3);
  console.log(numbers);

  // Remove Inside Element - Splice using value
  lb('red', 'Remove Inside Element - Splice using value');

  const toBeDeleted1 = 13;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toBeDeleted1) {
      numbers.splice(i, 1);
    }
  }
  console.log(numbers);

  // Filter Array
  lb('red', 'Filter Array');

  const toBeDeleted2 = 10;
  numbers = numbers.filter((item) => item !== toBeDeleted2);
  console.log(numbers);

  // Delete Operator
  lb('red', 'Delete Operator');

  numbers[1] = undefined;
  delete numbers[2];
  console.log(numbers);

  // Reset Whole Array
  lb('red', 'Reset Whole Array');

  let x = [1, 2, 3];
  let y = x;
  x = [];
  console.log(x, y);

  // Alternative
  lb('red', 'Alternative');

  let xx = [1, 2, 3];
  let yy = xx;
  xx.length = 0;
  console.log(xx, yy);

  // Reset Array using while loop
  lb('red', 'Reset Array using while loop');

  let xxx = numbers;
  while (numbers.length) numbers.pop();
  console.log(numbers, xxx);
})();
