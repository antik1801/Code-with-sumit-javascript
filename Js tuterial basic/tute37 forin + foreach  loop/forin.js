
// forin loop basically works in the objects

const person = {fname: "john", lname:"Kabir",age: 18};
const number = [15,25,45,65,85,14,65];
let text = "";
for(let x in person)  // so this forin loop help to collect dats from the object name person
{
    console.log(x,"=",person[x]);
    text += person[x] + " ";
}
document.getElementById("demo").innerHTML =  text;

for(let x in number)   //  Here forin loop worked as a array itteration
{
    console.log(number[x]); // this is not we use usually
}         ///Recommandedd:  Do not use forin in array where the index number is important

/// It is recommanded to use foreach loop while accessing the array elements

console.log("-------------------------------------------------");
number.forEach(myFunction);

function myFunction(value,index,array)
{
    
    console.log(value);
}