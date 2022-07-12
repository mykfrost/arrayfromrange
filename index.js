const numbers = arrayFromRange(-10,-11);
console.log(numbers);


function arrayFromRange(min , max){
 const output = [];
  for (let i = min ; i <= max; i++)
  output.push(i);
  return output;
}

// Includes
 const numbers2 = [1,2,3,4];
// array to check if an element exists in an array

//check here
 console.log(includes(numbers2, 3));

 function includes(array , searchElement){
 
  for (let element of array)
if (element === searchElement){
     return true;
}
    return false;
 }