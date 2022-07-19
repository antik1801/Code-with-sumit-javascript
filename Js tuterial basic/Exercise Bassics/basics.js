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
