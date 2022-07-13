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
      if (element === searchElement)
     return true;

    return false;
 }


 const numbers3 = [1,2,3,4,5,6,7,8,9];
const output2 = except(numbers3,[1,2,3,4]);
 console.log(output2);

 function except (array , excluded){
 const output2 = [];

  for (let element of array)
    if (!excluded.includes(element))//checking to see if the current element is excluded in the array
   output2.push(element);
     return output2;
 }