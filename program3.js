let arr = [1,3,5,2,5]
var output = [];
arr.sort();
arr.map(i=>
{
     output.unshift(i);      
})

console.log(output);
