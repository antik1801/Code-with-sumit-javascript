const cars = ["BMW","MITSUPISHI","MARCEDIS","PORSE"]
for(let i=0,j=0; i< cars.length; i++)
{
    console.log(cars[i]);
    console.log(cars[j]);
}
/// Another way to write loops

var i = 2;
var j = 5;
var len = cars.length;
for(;i<len;i++)
{

}


/// break any loop 

var i= 1;
var j= 0;

for(;;i++)
{
    if(i > 10)
    break;
    else 
    console.log(i);
}