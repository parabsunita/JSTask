// Check if first array is same as second array
// Let arr1 = [1,2,3]
// Let arr2 = [1,2,3]
// Output : true

// Let arr1 = [1,3,2]
// Let arr2 = [1,2,3]
// Output : false

// Let arr1 = [1,3,5]
// Let arr2 = [1,3,4]
// Output : false




let firstArray = [1,2],
    secondArray = [1,2,3,4],
    isEqualArray=false;
let compareArray = (arrayToCompare, arrayToBeCompare) =>{
    if(arrayToCompare.length == arrayToBeCompare.length)
    {
        arrayToCompare.every(v => arrayToBeCompare.includes(v));
        isEqualArray = true;
    }
    console.log(isEqualArray)
}
 

compareArray(firstArray, secondArray);

