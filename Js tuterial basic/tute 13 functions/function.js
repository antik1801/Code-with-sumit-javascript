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

function alphabet(par)
{
  
  var array = par.split(" ");
  var array1 = [];
  for(var i= 0; i< array.length; i++)
  {
    array1[i] = array1[i].toUpperCase();
  }

}

alphabet("the quick brown fox")