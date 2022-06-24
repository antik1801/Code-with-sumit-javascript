const fruits= ["Banana","Pineapple","Mango","Jackfruit","Dragon fruit"];
const object = {
   
    arrayTostring: function()
    {
       console.log(fruits.toString());
    },
    joinmethod: function()
    {
        console.log(fruits.join("*"));
    },
    poopingAndPushing: function()
    {
        console.log(fruits);
        console.log(fruits.pop());
        console.log(fruits);
        console.log(fruits.push("Dragon fruit"));
        console.log(fruits);
        console.log(fruits.shift());
        console.log(fruits);
        console.log(fruits.unshift("Grapee"));
        console.log(fruits);
    },
    splice : function()
    {
        console.log(fruits.splice(2,0,"Malta","gupol"));
    },
    slice : function()
    {
        const vartus= fruits.slice(1,3)
        console.log(vartus);
        console.log(fruits);
    },
}
object.arrayTostring();
object.joinmethod();
object.poopingAndPushing();
object.splice();
object.slice();
document.getElementById("demo").innerHTML=fruits;