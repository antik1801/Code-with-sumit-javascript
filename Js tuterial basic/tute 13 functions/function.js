/*
 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function Palindrome(test)
{
    
    var result = Array.from(test);
    var main = result.reverse();
    console.log(result);
    if(result === main)
    {
        console.log("Palindrome");
    }
    else{
        console.log("Not palindrome");
    }
}
Palindrome("madamo")