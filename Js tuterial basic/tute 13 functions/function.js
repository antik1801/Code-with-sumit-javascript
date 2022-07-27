/*
 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

// function Palindrome(test)
// {
    
//     //var result = new const;
//     var main =  result.reverse();
//     console.log(result);
//     console.log(main);
//     if(result === main)
//     {
//         console.log("Palindrome");
//     }
//     else{
//         console.log("Not palindrome");
//     }
// }
// Palindrome("madamo")

// function alphabet(par)
// {
  
//   var array = par.split(" ");
//   var array1 = [];
//   for(var i= 0; i< array.length; i++)
//   {
//     array1[i] = array1[i].toUpperCase();
//   }

// }

// alphabet("the quick brown fox")

/*
Write a JavaScript function which says whether a number is perfect.

Note : According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(6); 

/*
Write a JavaScript function to compute the factors of a positive integer
*/
 
//  

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

var arr =  [1,2,3,4,5];
function RemoveDuplicateData(arr)
{
    return arr.filter((value,index) => arr.indexOf(value) === index);

}
RemoveDuplicateData(arr);
arr.sort(function(a,b){return a-b});
function pre()
{
   var len = arr.length;
   console.log(arr[1]);
   console.log(arr[len-2]);
}

pre();

/*

*/
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

  
