const a={
    array1: function()
    {
        const arr = ["volbo","Lamborgini","Mitsupishi","Jangler"];
        console.log(arr);
    },
    length: function()
    {
        const fruits = ["Banana","Mango","Jackfruit","pineapple"]
        console.log(fruits.length)
    },
    lastElement: function()
    {
        const arr2= ["Banana","jackfruit","Mango","Pineapple"];
        console.log(arr2[arr2.length-1]);
        var lst = arr2.length-1;
        console.log(arr2[lst]);

    },
    forloop: function()
    {
        const fruits = ["Banana","Jackfruit","Mango","pineapple"];
        for(i= 0; i< fruits.length; i++)
        {
            console.log(fruits[i]);
        }
    },


}

const cars = ["Saab", "Volvo", "BMW"];
function forloop(){
    for(i=0; i < cars.length; i++)
    {
        console.log(cars[i]);
    }
}
document.getElementById("demo").innerHTML = cars;
console.log(typeof cars)
a.array1();
a.length();
a.lastElement();
a.forloop();
forloop();