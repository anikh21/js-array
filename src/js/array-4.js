(function () {
  /**
   * @Title: Add New Elements
   */

  lb(false, 'Add New Elements', true);

  // Use push method to insert element in end
  lb('red', 'Use push method to insert element in end');
  const arrP1 = [1, 2, 3];
  const arrP2 = [8, 9];
  const arrP3 = [0];

  arrP1[arrP1.length] = 4;
  arrP1.push(6);
  arrP1.push(...arrP2);
  Array.prototype.push.apply(arrP1, arrP3);

  console.log(arrP1);

  // Use unshift method to insert element in first
  lb('red', 'Use unshift method to insert element in first');
  const arrU1 = [8, 9, 0];
  const arrU2 = [4, 5, 6];
  const arrU3 = [1, 2, 3];

  arrU1.unshift(7);
  arrU1.unshift(...arrU2);

  Array.prototype.unshift.apply(arrU1, arrU3);

  console.log(arrU1);

  // Use splice method to insert element in given index
  lb('red', 'Use splice method to insert element in given index');

  const arrS1 = [1, 2, 3, 5, 0];
  const arrS2 = [6, 7, 8, 9];

  arrS1.splice(3, 0, 4);
  arrS1.splice(5, 0, ...arrS2);

  console.log(arrS1);
})();
