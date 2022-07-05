// const letters = new sets(["a","b","c"]);

// when we use sets ?
// its basically when we use object + strings in a single veriable we use sets
//Sets dont repeat a value/ Unique value

const letters = new Set(["a","b","c"]);

var text = "";

letters.forEach(function(value)
{
    text += value + "<br>";
})
document.getElementById("demo").innerHTML = text;
//console.log(text);

console.log(letters.values());