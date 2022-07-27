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



/*
5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

var myColor =  ["Red", "Green", "White", "Black"];

console.log(myColor.toString());  // it changes a array to string
console.log(myColor.join()); //It join the whole elements into one element
console.log(myColor.join('+')); // It joins the element adding +


/*
8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 0;
var frequent = 1;
var item;

for(var p=0;p<arr1.length;p++)
{
    for(var q=p;q<arr1.length;q++)
    {
        if(arr1[q] === arr1[p])
        {
            count++;
            if(frequent<count)
            {
                frequent = count;
                item = arr1[p];
            }
           
        }
    }
    count=0;
    

}

console.log(`The most frequent itam is ${item} and its ${frequent} times`)
/*
19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays
*/
var array1= [1,0,2,3,4];
var arr_ind = array1.length;
var array2= [3,5,6,7,8,13];
var arr2_ind =array2.length;
var arr_result = [];

for(var i=0,j=0;i<array1.length,j<array2.length;i++,j++)
{
    arr_result.push(array1[i]+array2[j])
   // console.log(arr_result);
}

if(i == array1.length)
{
    for(j=array2.length;j<i;j++) 
    {
        arr_result.push(array1[j]);
    }
}
else
{
    for(j=array1.length;j<i;j++) 
    {
        arr_result.push(array2[j]);
    }
}

///console.log(arr_result);

/*
22. Write a JavaScript program to compute the union of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/

var array1 = [1,2,3]
var array2 = [100,2,1,10]

var arr = array1.concat(array2);
var array_result = [];
//console.log(arr);

function RemoveDuplicateData(arr)
{
    return arr.filter((value,index) => arr.indexOf(value) === index);

}


console.log(arr.sort(function(a,b){return a-b}));
console.log(RemoveDuplicateData(arr));




/*
32. Write a JavaScript function to find an array contains a specific element. Go to the editor

Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]
*/
arr = [2,5,9,6]


console.log(arr.includes(5));


/*30. Write a JavaScript function to merge two arrays and removes all duplicates elements. Go to the editor

Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]*/

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var arr = array1.concat(array2);
function RemoveDuplicateData(arr)
{
    return arr.filter((value,index) => arr.indexOf(value) === index);

}

console.log(RemoveDuplicateData(arr));

/*
34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
*/

var array1 = [ 43, 56, 23, 89, 88, 90, 99, 652];

array1.sort(function(a,b){return a-b})
console.log(array1[4]);

/*
37. Write a JavaScript function to create a specified number of elements with pre-filled string value array. Go to the editor

Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]
*/

function array_filled(times,item)
{
    for(var i =0; i<times ; i++)
    {
        console.log(item);
        
    }
}
array_filled(3,'default value')
array_filled(4,'Password')


/*
41. Write a JavaScript function to generate an array between two integers of 1 step length. Go to the editor

Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/
const array = [];
function rangeBetween(val1,val2)
{

    var min = Math.min(val1,val2);
    var max = Math.max(val1,val2);
    var array = new Array(max - min + 1);
    // for(i=min;i<=max;i++)
    // {
    //     array.push(i);
    // }
    for(i=0;i<array.length;i++) 
    {
        array[i] = min ;
        min++;
    }
    return array;
    
}
console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));

/*
38. Write a JavaScript function to move an array element from one position to another. Go to the editor

Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]
*/
var arr1 = [];

function swap(arr,start,end)
{
    var temp;
     temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return arr;
}
console.log(swap([10,20,30,40,50],0,2))

