
var carname = "volbo";
function MyFunction()
{
 CarName = "Volvo"; //Accidental global veriable
    document.getElementById("d1").innerHTML = CarName;
}
MyFunction();
document.getElementById("d2").innerHTML = CarName;

function call()
{
    var number = 10;
    return number;
}

console.log(carname);
console.log(call());

function multiply()
{
    num1 = document.getElementById("multiply");
    num2 = document.getElementById("devision");
    document.getElementById("result").innerHTML = num1 * num2;
}
