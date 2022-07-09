let x = 10.5;
const object = {
    stringToNumber: function()
    {
        var x = 3.789;
        console.log();
        console.log(Number(x),"   ",parseFloat(x)," ",parseInt(x));

    },
    unary: function()
    {

    },
}
object.stringToNumber();
object.unary();
console.log(x.toPrecision(3))
console.log(x.toFixed());