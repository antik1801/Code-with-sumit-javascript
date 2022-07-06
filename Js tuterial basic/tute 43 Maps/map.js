// why we use map ?
// its almost like object where key value can be any datatype

const map = new Map([
    [1,"uno"],
    [2,"Segio"],
    [3,"Pala"],
    [4,"Apte"],
    [5,"lapas"],
    [6,"Macaw"],
    ["fruits","noim"],
    ["firstname","Alvi"],
    ["SecondName","tanvy"]
]);

map.set("pornstarts", "Jonney Sins");

console.log("Starting of for of loops")
console.log("-------------")
// this is the for of loop
/*for(let key of map.keys())
{
    console.log(`key is ${key}`);
}
for(let value of map.values())
{
    console.log(`value is ${value}`);
}*/
//This is the for of loop
console.log("End of for of loops ")
console.log("-------------")
for(let [key,value] of map)
{
    console.log(`key is ${key} and value is ${value}`);
}

console.log("Starting of for each loop")
console.log("-------------")
/// This is the foreach block loops

/*
map.forEach((value,key)=>{
    console.log(`value is ${value} and key is ${key}`);
})
*/

map.delete("fruits");
for(let [key,value] of map)
{
    console.log(`key is ${key} and value is ${value}`);
}

// Map.has() methods return whether a key is existed in this map or not

console.log(map.has());