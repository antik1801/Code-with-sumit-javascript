const billTotal = document.getElementById("billTotalInput");
const tipdiv = document.getElementById("tipInput");
const people = document.getElementById("numberOfPeople");
const perPerson = document.getElementById("perPersonTotal");
var peoplediv = 1;

const increasePeople =()=>{
    peoplediv++;
    people.innerHTML = peoplediv;
}
const decreasePeople=()=>{
    if(peoplediv>1){
        peoplediv--;
        people.innerHTML = peoplediv;
    }
    else{
        peoplediv = 1;
    }
}
const calculateTotalBill=() =>
{
    const bill = Number(billTotal.value)
    const tip = Number(tipdiv.value);
    const calculateBill = bill * tip / 100;
    const totalPerPerson = calculateBill/peoplediv;
    perPerson.innerHTML = `$${totalPerPerson.toFixed(2)}`;
    console.log(calculateBill);
}