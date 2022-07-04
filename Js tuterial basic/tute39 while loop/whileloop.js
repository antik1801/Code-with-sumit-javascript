var i = 0;
let text = "";
while(i<10)
{
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("demo").innerHTML=text;

i=0;
do{
    text +="<br> The number is " + i;
    i++;
    
}while(i<10)
document.getElementById("demo").innerHTML=text;