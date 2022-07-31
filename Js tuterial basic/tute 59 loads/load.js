const array = [1,2,3];
const t0 = performance.now();
// More time complexity
for(var i = 0; i< array.length ; i++)
{
    console.log(array[i]);
}
const t1 = performance.now();
//console.log(t1-t0);    
// Less time consuming
var l = array.length;

for(var i = 0; i< l ; i++)
{
    console.log(array[i]);
}
const t2 = performance.now();
console.log(t2-t1)