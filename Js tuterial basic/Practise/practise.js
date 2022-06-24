document.getElementById("demo").innerHTML="Sagor";
const info = {
    name: "Bangladesh",
    birth: 1971,
    district: 64,
    division : 6,
    population: "20 million",
    slices: function()
    {
        let fruits = "Banana,Mango,Orange";
        console.log(fruits.slice(7,13));
    }

}
// function slices()
// {
//     let fruits = "apple,mago,guava,orange";
//     console.log(fruits.slice(7,13));
// }
function replace()
{
    var sen = "Antik is living in dhaka";
    console.log(sen);
    console.log(sen.replace("dhaka","khulna"));
}
function uppercases()
{
    var word = "goal";
    console.log(word.toLocaleUpperCase());
    console.log(word.toLocaleLowerCase());
}

function trim()
{
    var txt = "    Hellow World! ";
    console.log(txt.trim());
}
function padding()
{
    var txt = "hikk";
    console.log(txt.padStart(10,"fuck"));
}
function charat()
{
    var g= "gimicogame";
    console.log(g.charAt(5));
}
function search_find()
{
    var txt ="Antik live in bangladesh where local train available";
    console.log(txt.indexOf("local"));
    console.log(txt.match("local"));

}
//7 
function baseconversion()
{
    var n =12;
    console.log(n.toString(16));
    console.log(n.toString(8));
    console.log(n.toString(12));
}
function exp_fix_perse()
{
    var n= 9.25264896355;
    console.log(n.toExponential(3));
    console.log(n.toFixed(5));

}
function length()
{
    var arr=["google","microsoft","edge","moment"];
    console.log(arr.length);
    console.log(arr[arr.length-1]);
}
function tute20()
{
    var arr=["google","microsoft","edge","moment"];
    console.log(arr.toString());
    console.log(arr.push("kobita")); console.log(arr);
    console.log(arr.pop()); console.log(arr);
    console.log(arr.shift()); console.log(arr);
    console.log(arr.unshift("ganjababa")); console.log(arr);
}
function tute23()
{
    var number = [12,5,7,9,6,25,78,4];
    function Sort(a,b)
    {
        return a-b;
    }
}
console.log(info);
document.getElementById("demo").innerHTML = info;
// slices();  //slice is not working
info.slices();
replace();
uppercases();
trim();
padding();
charat();
search_find();
baseconversion();
exp_fix_perse();
length();
tute20();
console.log(tute23.sort());