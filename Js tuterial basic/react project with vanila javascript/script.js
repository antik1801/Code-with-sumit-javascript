let number = 0;
let res_num=0;
const button = document.querySelector("#button")
const display = document.querySelector("#display")
const reset = document.querySelector("#reset")
button.addEventListener("click",()=>{
    number ++;
    display.textContent = number;
})
reset.addEventListener("click",()=>{
    number = 0;
    display.textContent =res_num;
})