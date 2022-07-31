const today = new Date();
var month = today.getMonth()
const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = today.getDate();
var year = today.getFullYear()
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

document.getElementById("demo").innerHTML =  "Today is : "+ daylist[day];

 var hour = today.getHours();
 var minute = today.getMinutes();
 var seconds = today.getSeconds();
 
 if(hour>12)
 {
    hour = hour - 12;
    document.getElementById("sex").innerHTML = "Current time is: " +hour + "PM : "+ minute + ": "+ seconds;
 }
 else 
 {
    document.getElementById("sex").innerHTML = "Current time is: " +hour + "PM : "+ minute + ": "+ seconds;;
 }
function print_current_pages()
{
    window.print();
}
function print()
{
    document.getElementById("job").innerHTML = month + "-" + date + "-" + year+", "+ month +"/"  + date + "/" + year ;
}
print();

// function area(x,y,z)
// {
   

// }

// area(5,6,7)


/*
1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function facterial(value)
{
    const fact =new fact;
  
    fact = 1;
    for(var i= value; i>=1 ; i--)
    {
        fact = fact * i;
    }
    return fact;
}
console.log(facterial(5));
