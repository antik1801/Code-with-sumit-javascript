const numbers = [5,42,3,25,21,93,27]
var count = 0;
function myFunction(value, index, array) 
{
    console.log(value);
}
function Map(value,index,array)    
{
     console.log(array *2);
}
function Filter(value, index, array)
{
    for(i=0;i<=numbers.length;i++)
    if(value>15)
    {
        count++;
    }
    console.log(count);
    return value > 15;
}
function Reduce(total, value, index, array)
{
    console.log(total);
    console.log("---------------------------");
    return total + value;
}
const topic={
    ArraFrom: function(){
        console.log(Array.from("ABCDEFGHI"));
    }
}
numbers.forEach(myFunction);
const newArray =  numbers.map(Map);
const FILTER = numbers.filter(Filter)
console.log(FILTER);
const newReduce = numbers.reduce(Reduce,0); // Reduce functon has two paramiters reduce(function_name,initial_value);
console.log(newReduce);
topic.ArraFrom();