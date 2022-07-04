let age = 18;
if(age<18)
{
    console.log("you are young");
}
else if(age == 18)
{
    console.log("Welcome to adult");
}
else if(age>18 && age<30)
{
    console.log("You are matured")
}
else{
    console.log("You are old");
}
switch(new Date().getDate())
{
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Tuesday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day ="Saturday"; 
        break;
    default:
        txt = "Looking forward to the weekend";
}

document.getElementById("demo").innerHTML="Today is "+ day;