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

 //Move Operations

 const numbers4 = [1,2,3,4];

 const output3 = move(numbers4 , 0, -1);//Move numbers in this array one pisition to the right (0,1)
 console.log('New Array is ',output3);
 //console.error('Invaid Entry');

 function move(array , index, offset){
  const position = index + offset ;
  if(position >= array.length || position < 0)
  {
    console.error('Invalid Offset.');
    return;
  }
  const output3 = [...array];// This makes  clone of the original array
//we need to remove an element from the array and then place it back using splice(remove )

const element2 = output3.splice(index, 1)[0];//remove the element and store it in the element var. Go to the given index and delete one item(index, 1)
//statement above returns the elemennt that we just deleted. it is stored in const element = output3 ...

output3.splice(position , 0 , element2);
return output3;
//More about splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
 }

 const numbers5 = [1,2,3,4,1];
 const count = countOccurences(numbers5 , -1);
 console.log(count);

 function  countOccurences(array , searchElement){
  let count = 0;
   for(let element3 of array)
   if (element3 === searchElement)
   count++;
   return count;
 }

 //Implementation using the reduce method

 const numbers6 = [1,2,3,4,1];
 const count3 = countOccurences2(numbers6 , 1);
 console.log('Using Reduce',count3);


 function  countOccurences2(array , searchElement){
  
  return array.reduce((accumulator , currentValue) =>{

 const occurence = (currentValue === searchElement) ? 1 : 0;
   console.log(accumulator , currentValue , searchElement);

    return accumulator + occurence;
  },0);
 }

 //Array to display max number in an array
//the simple solution
 const numbers7 = [10,20,30,40,50,60,70];
  const max = getMax(numbers7);
console.log('Simple MAX',max);

function  getMax(array){

if (array.length === 0) return undefined;
let max = array[0];
for (let i = 1 ;  i < array.length; i++)
      if(array[i] > max)
       max = array[i];
       return max;
  }

  //Solution using Reduce method

  const mynumbers = [10,20,30,40,50,60,70];

  const maxx = getMaximum(mynumbers);

console.log('MAX Using Reduce',maxx);

function  getMaximum(array){

if (array.length === 0)
 return undefined;
 return array.reduce((a , b) =>(a > b) ? a : b);
}
// if(currentValue > accumulator) return currentValue;
// return accumulator; this is the first non clean implementation

// return (currentValue > accumulator) ? currentValue: accumulator;
// }


//Movies Exercise 

const movies = [
  {title: 'Spiderman' ,year: 2018, rating : 4.5 },
  {title: 'Top Gun ',year: 2018, rating : 4.7 },
  {title: 'The Boys' ,year: 2018, rating : 3 },
  {title: 'Superman' ,year: 2017, rating : 4.5 }
];

//All Movies in 2018  with ratings >4
// Sort them by rating in descending order
//Pick Title and sisplay in console
//sort method used with objects we need to supply a comparison function
const titles  = movies
.filter( m => m.year === 2018 && m.rating >= 4)
.sort((a , b) => a.rating - b.rating) // this sorts movies ccording to ratings in an ascending order. to make it descending. code below
.reverse()
.map(m => m.title);

console.log('BlockBuster ',titles);