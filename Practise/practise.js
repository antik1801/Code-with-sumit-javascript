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

//7 

console.log(info);
document.getElementById("demo").innerHTML = info;
// slices();  //slice is not working
info.slices();
replace();
uppercases();