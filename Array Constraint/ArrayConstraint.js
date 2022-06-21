const cars = ["Saab","volvo","BMW"];
const topic ={
    ArrayTop: function()
    {
        console.log(cars.push("celox"));
        console.log(cars);
    }
}
topic.ArrayTop();
cars.push("audi");
cars.push("marcedis");
 console.log(cars);