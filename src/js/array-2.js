(function () {
  /**
   * @Title: Update Array Elements and Fill Array
   */

  lb(false, 'Update Array Elements and Fill Array', true);

  // Array Fill Manual Way
  const arr1 = new Array(18);

  // Array Fill
  lb('red', 'Fill Array');
  const arr2 = new Array(18);
  arr2.fill('hello world');
  console.log(arr2);

  const names = ['Anik', 'Shakil', 'Hossain'];

  // console.log(names);

  // Fill Array and Update
  lb('red', 'Fill Array and Update');
  const response = new Array(9);
  response.fill(false);

  for (let i = 0; i < response.length; i++) {
    const random = Math.floor(Math.random() * 10 + 1);
    response[i] = random > 5 ? 'x' : '0';
  }

  console.log(response);

  // Array is mutable
  lb('red', 'Array is mutable');

  function update(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = `${i + 1}. ${arr[i]}`;
    }
    return arr;
  }

  console.log(update(names));

  console.log(names);
})();
