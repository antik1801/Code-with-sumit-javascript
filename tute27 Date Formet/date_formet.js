var d;
const a={
    date: function()
    {
        const d= new Date("2022-06-22");
        console.log(d);
    }
}
d = new Date("2022-06-22");
document.getElementById("d").innerHTML=d;
a.date();