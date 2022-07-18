const a={
    array1: function()
    {
        const arr = ["volbo","Lamborgini","Mitsupishi","Jangler"];
        console.log(arr);
    },
    length: function()
    {
        const fruits = ["Banana","Mango","Jackfruit","pineapple"]
        console.log(fruits.length)
    },
    lastElement: function()
    {
        const arr2= ["Banana","jackfruit","Mango","Pineapple"];
        console.log(arr2[arr2.length-1]);
        var lst = arr2.length-1;
        console.log(arr2[lst]);

    },
    forloop: function()
    {
        const fruits = ["Banana","Jackfruit","Mango","pineapple"];
        let flen = fruits.length;
        text = "<ul>";
        for(i= 0; i< flen; i++)
        {
           console.log(fruits[i]);
        }
        text += "</ul>";
        
    },


}
const obj={
    name: "Antik",
    age: 25,
    sex: "Male",
    subject: "CSE",
    institute: "AIUB",
    experience: "Java-Script",
    
}
const foods=["bread","chicken","dal","Manni"];
console.log(foods instanceof Array);
const cars = ["Saab", "Volvo", "BMW"];
function fruits()
{
const fruits = ["Banana","Jackfruit","Mango","pineapple"];
let flen = fruits.length;
        text = "<ul>";
        for(i= 0; i< flen; i++)
        {
           text += "<li>" + fruits[i] + "</li>";
        }
        text += "</ul>";
        document.getElementById("demo").innerHTML = text;
    }
function forloop(){
    for(i=0; i < cars.length; i++)
    {
        console.log(cars[i]);
    }
}
const fruit = ["Banana","Jackfruit","Mango","pineapple"];
function Myfunction(value){

    console.log(value);
}

fruit.forEach(Myfunction);

document.getElementById("demo").innerHTML = cars;
console.log(typeof cars)
a.array1();
a.length();
a.lastElement();
a.forloop();
forloop();
fruits();


/*
------------------------------------------------


array problem solving 


Write a JavaScript function to check whether an 'input' is an array or not.

Test Data:
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/

console.log("------------------------------Problem solving");

var is_array = function (str)
{
 if(toString.call(str) === "[object Array]")
 {console.log("True");}
 else{
    console.log("False");
 }
}
is_array("W3 school");
is_array([1,2,3,4,0]);


/*
2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/



const problem2 = {
    Slice: function(arr){
        console.log(arr.slice(0))
    },
    ArrayFrom: function(arr)
    {
        console.log(Array.from(arr));
    },
}

problem2.Slice([1, 2, 4, 0]);
problem2.Slice([1, 2, [4, 0]]);
problem2.ArrayFrom([1, 2, [4, 0]]);
problem2.ArrayFrom([1, 2, 4, 0]);

/*
3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
*/

const problem3 = {
    first_element: function(arr)
    {
        console.log(arr[0]);
        var lst_elt = arr.length-1;
        console.log(lst_elt);
    }
}
problem3.first_element([7,9,0,-2])

const prob5 = {
    all_element: function(elt)
    {
       elt.forEach(function myfunction(value,index,array)
       {
        console.log(value);
       })
    },
}
prob5.all_element(["Red","Green","White","Black"]);

/*
6.
Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/

//const num = window.prompt();

function prob6(arr)
{

    const str= arr.toString();
    const result = [str[0]]
    for(var i= 1; i<str.length; i++)
    {
        if((str[i-1]%2===0) &&(arr[i]%2===0))
        {
            result.push('-',str[i]);
        }
        else
        {
            result.push(str[i]);
        }
    }
    return result.join(' ');
}

console.log(prob6("025468"));


/*
 input a credit card number contains 16 digits - to each 4 digits
*/

function credit_card(num)
{
    const str = num.toString();
    const result = [str[0]];
    var count = 0;
    for(var x=0;x<str.length;x++)
    {
        if(count<=4){
            result.push('-',str[x]);
            count++;
        }
        else
        {
            count=0;
        }
        return result.join(' ');
    }
}

console.log(credit_card("4526308691312546"));

/*
7. Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function sort(array)
{
    console.log(array.sort());
}
sort([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ])

/*
Write a JavaScript program to find the most frequent item of an array.

Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output: a ( 5 times )
*/

// var frequent = function(x)
// {
//     console.log(x.sort());
//     for(var i = 0; i<x.length;i++)
//     {
//         for(var j=i;x[j]==x[i];j++)
//         {
//             count++;
            
//         }
//     }

// }
// frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

/*
9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. Go to the editor
Click me to see the solution
*/
// function change(array)
// {
//     array.toString();
//     for(var i= 0; i<array.length; i++)
//     {
//         if(array[i]=[A-Z]) 
//         {
//             console.log(array.toLowerCase(array[i]));
//         }
//         else
//         {
//             console.log(array.toUpperCase(array[i]));
//         }

//     }
// }
// change('The Quick Brown Fox');

function problem10(array)
{

    array.forEach(function myfunction(value,index,array){
        console.log("Row"+index);
    console.log(value);})
   
}
problem10([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);


/*
Write a JavaScript program to find the sum of squares of a numeric vector.
*/

function numberic(array)
{

    var sum = 0;
    array.forEach(function myfunction(value,index,array){
        sum += Math.pow(value,2);
    })
    return sum;
}
console.log(numberic([0,1,2,3,4]));