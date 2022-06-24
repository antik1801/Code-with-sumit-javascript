const d= new Date();
const firstdate = new Date();
const seconddate = new Date();
function setfullyear()
{
    console.log(d.setFullYear(2020));
}
firstdate.setFullYear(2020,05,25);
seconddate.setFullYear(2022,06,04);
function compare()
{
    if(firstdate > seconddate)
    {
        console.log("Firstdate is bigger than second");
    }
    else
    {
        console.log("second date is bigger than first date");
    }
}
setfullyear();
compare();