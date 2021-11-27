/**
 * @Title: Traverse Array Elements
 */

const numArr = [1, 2, 3, 4, 5];

// Simple Array Traverse
for (let i = 0; i < numArr.length; i++) {
    // console.log(numArr[i]);
}

// Array Sum & Avg
lb("red", "Array Sum & Avg");
let sum = 0;

for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
}
// output sum
console.log(sum);
// output avg
console.log(sum / numArr.length);

// Find Large Number
lb("red", "Find Large Number");
const numArr2 = [45, 85, 75, 36, 24, 65, 21, 15, 87, 40, 10, 50, 88];

let largestNum = numArr2[0];

for (let i = 1; i < numArr2.length; i++) {
    if (numArr2[i] > largestNum) {
        largestNum = numArr2[i];
    }
}

console.log(largestNum);

// Find Small Number
lb("red", "Find Small Number");
let smallestNum = numArr2[0];

for (let i = 1; i < numArr2.length; i++) {
    if (smallestNum > numArr2[i]) {
        smallestNum = numArr2[i];
    }
}

console.log(smallestNum);