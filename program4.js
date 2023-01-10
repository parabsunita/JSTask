let arr = [2,1,3,5,2,5,2]
let output = [];
let value = 2;
arr.map(function(i)
{
  i != value ? output.push(i) :""
})
console.log(output)
