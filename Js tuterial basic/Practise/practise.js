/*var firstname = "John"
var lastname = "Doe"
var number = [23,12,7,58,45,69,14,25];
const object ={
    Slice: function()
    {
        let str = "Apple,Banana,pineapple";
        console.log(str.slice(7,13));
    },
    Replace: function()
    {
        var l1 = "I love you sokina";
        console.log(l1.replace("sokina","Zarina"));
    },
    Uppercase: function()
    {
        var txt = "i love you tillotoma";
        console.log(txt.toUpperCase(txt));
    },
    lowercase: function()
    {
        var txt = "I LOVE MY COUNTRY";
        console.log(txt.toLowerCase(txt));
    },
    Split: function()
    {
        var txt = "Hellow world!";
        console.log(txt.split(" "));
    },
    Locate: function()
    {
        var txt = "Please Locate my location";
        console.log(txt.indexOf("Locate"));
    },
    Match: function()
    {
        var txt = "Please Locate my location";
        console.log(txt.match(/loc/));
    },
    templateLiterals: function()
    {
        var txt = "You are as fuck as bool";
        console.log(txt);
    },
    tobaseconversion: function()
    {
        var number = 30;
        console.log(number.toString(8));
        console.log(number.toString(2));
    },
    toexponensial: function()
    {
        var v = 13;
        console.log(v.toExponential(3));
    },
    tofix: function()
    {
        var n = 16.58974596;
        console.log(n.toFixed(3));
    },
    parseint: function()
    {
        var n = 15469.256489653;
        console.log(parseInt(n));
    },
    Sortnumbers: function()
    {
    number.sort(function(a,b){return a-b;});
        
    },
    randomsort: function()
    {
        number.sort(function(){return 0.5-Math.random();})
    },
    arrayit: function(value,index,array)
    {
        number.sort(function (a,b) { return a-b;})
        console.log(value);

    },
    valueg: function(value,index,array)
    {
        console.log( value>15);
    },


}


document.getElementById("demo").innerHTML= firstname+ lastname;
object.Slice();
object.Replace();
object.Uppercase();
object.lowercase();
object.Split();
object.Locate();
object.Match();
object.templateLiterals();
object.tobaseconversion();
object.toexponensial();
object.tofix();
object.parseint();
object.Sortnumbers();
console.log(number)
object.randomsort();
console.log(number);
object.arrayit(number);
object.valueg(number);

*/

// const arr = ["Lemon","Pineapple","guava","mango"];

// const object = {
//     callarr: function()
//     {
//         console.log(arr);
//     },
//     Length: function()
//     {
//         console.log(arr.length);
//     },
//     LastElement: function()
//     {
//         console.log(arr.length-1);
//     },
//     forLoop: function()
//     {
//         var len= arr.length;
        
//     },
// }
// object.callarr();
// object.Length();
// object.LastElement();

// Tute 47 - Regular Expression problem solving

/*
Do a javascript program to test the forst charector ofa string is uppercase od not
*/

const text="This is the text file";

function Upper_Case()
{
    regex = /^[A-Z]/;
    if(regex.test(text))
    {
        console.log("First charector is uppercase");
    }
    else{
        console.log("First charector is not uppercse");
    }
}
Upper_Case();


// Problem  2 

// Check a credit card number formet

/*
    Check credit card details whether its valid or invalid
    Here are some format of some well-known credit cards.

    American Express: Starting with 34 or 37, length 15 digits.
    Visa : Starting with 4, length 13 or 16 digits.
    MasterCard :- Starting with 51 through 55, length 16 digits.
    Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
    Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
    JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
*/

function isCreditCard(Card_no)
{
    regEx = /^(?:(4[0-9]{12}(?:[0-9]{3}?)|(5[1-5][0-9]{13})|(6(?:011|5[0-9]{2})[0-9]{12}))) /;

}

isCreditCard("378282246310006");

