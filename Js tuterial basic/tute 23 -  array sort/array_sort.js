const fruits = ["Banana","guava","apple","lemon","pineapple"];
const number = [25,63,52,5,45,9,65,85];
const cars = [
    {name: "Volbo",year:2008},
    {name: "Marcidis", year:2016},
    {name: "suzuki", year: 2005},
]
console.log(number);
const object = {
    sortingNumbers: function()
    {
        number.sort(function(a,b){ return a - b; });
    },
    randomSorting: function()
    {
        console.log(number.sort(function(a,b){ return 0.5- Math.random();}));
    },
    mathmax: function()
    {
        console.log(this.mathmax.apply(number));
    } ,
    sortByYear: function()
    {

    },


}
console.log(fruits.sort());
// console.log(number.sort());
console.log(fruits.reverse());
console.log("---------------------------------")
object.sortingNumbers();
console.log(number);
console.log(number[0]);
console.log(number[number.length - 1]);
function displayCars()
{
    for(i=0;i<cars.length-1;i++)
    {
        document.getElementById("demo").innerHTML = cars[i]; 
    }
}

console.log(cars.sort(function(a,b){ return a.year - b.year; }));
//object.mathmax();
// object.randomSorting();
