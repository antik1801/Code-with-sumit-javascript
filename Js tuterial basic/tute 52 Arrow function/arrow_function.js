

const obj={
    normal_function: function()
    {
        return "Hellow World";
    },
    arrow_function: ()=>{
        return "Hellow World";
    },
    arrow_function_short: () => "Hellow world",
    arrow_function_with_para: (val) => "Hellow " +  val,
    arrow_fun: val => "Hellow " + val,


}
hello = () => document.getElementById("demo").innerHTML += this;


console.log(obj.normal_function());
console.log(obj.arrow_function());
console.log(obj.arrow_function_short());
console.log(obj.arrow_function_with_para("world"));
console.log(obj.arrow_function_with_para("world")); 
console.log(obj.arrow_fun("world")); 
// window.addEventListener("load",Event.add_event_listener);
window.addEventListener("load",hello);
document.getElementById("btn").addEventListener("click",hello);