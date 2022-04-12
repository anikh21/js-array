(function () {
  /**
   * @Title: Slice Array Into Multiple Array
   */

  lb(false, 'Slice Array Into Multiple Array', true);

  const arr = [1, 2, 3, 4, 5, 6];

  // Slice
  lb('red', 'Slice');

  const sliced = arr.slice(1, 3);
  console.log(sliced);

  // Clone Array
  lb('red', 'Clone Array');

  const cloned = arr.slice();
  console.log(arr, cloned, arr === cloned);

  // Array Like Objects To Array
  lb('red', 'Array Like Objects To Array');

  function toArray() {
    return Array.prototype.slice.call(arguments);
  }
  const argsArray = toArray(2, 6, 4, 5, 'Hello World');
  console.log(argsArray);
})();
