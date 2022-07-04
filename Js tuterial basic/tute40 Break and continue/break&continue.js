/// continue statement get out of a itteratation of a loop

let text = "";
for(let i=0;i<10;i++)
{
    if(i===9) {break;}
    if(i===4) continue;

    text+= "<br>The number is" +i;
}
document.getElementById("demo").innerHTML= text;