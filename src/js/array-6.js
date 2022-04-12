(function () {
  /**
   * @Title: Concat Multiple Arrays
   */

  lb(false, 'Concat Multiple Arrays', true);

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const arr3 = arr1.concat(arr2);
  const arr4 = [...arr1, ...arr2];
  const arr5 = [].concat(arr1, arr2, [7, 8], 9);

  console.log(arr3, arr4, arr5);
})();
