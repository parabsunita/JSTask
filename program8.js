// Write a program to cyclically rotate an array by one
// Let arr = [1, 2, 3, 4]
// Output : [4, 2, 3, 1]

// Let arr = [1,1,2,2]
// Output : [2,1,12]

let arrayToRotate = [1, 2, 3, 4];
arrayToRotate.unshift(arrayToRotate.pop())
console.log(arrayToRotate)
