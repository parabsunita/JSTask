let arr=[1,2,3,4,5,6]
let output1 = [];
let output2 = [];
arr.map(function(i){
  i%2==0 ? output1.push(i) : output2.push(i) 
})
console.log(output1);
console.log(output2);
