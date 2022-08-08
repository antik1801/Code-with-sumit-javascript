var age = 9;
var isLoging = true;
var type = (age>=18) ? "adult" : (age<=10) ? "you are too young":"your age is over ten";
var access = (isLoging) ? false : true;
console.log(type);
console.log(access);

/// tuterial 5

var numbers = [1,2,3,4,5,6,7,8,9 ];

var result =numbers.find((currentValue,cuurentIndex,array)=>{
    return currentValue > 4;
})
console.log(result);


/// tuterial 6

///array,prototype,findindex

var index = numbers.findIndex((currentValue,cuurentIndex,array)=>{
  //  return (currentValue % 2) = 0;
  return currentValue > 20;
})
console.log(index); 


/// tutorial 07  == filter

var result = numbers.filter((currentValue)=>
{
    return currentValue > 4;
})
console.log(result);

// tuterial 8 = slice

var result = numbers.slice(1,3);
console.log(result);
var result = numbers.slice(0);
console.log(result);

/// tuterial 9 = splice
 
var result = numbers.splice(1,2,10,12,15,36,45); // it changes the element of main array 
console.log(result);
var result = numbers.splice(-1,0,25,36,15,46,48);
console.log(numbers);


// tutorial 10 = concade

var number1 = [1,2,3,4,5,6];
var number2 = [7,8,9,10,11,12,13];
var result = number1.concat(number2);
console.log(result);

// tutorial 11 = push  = push changes main array 

number1.push(72,73,74);
console.log(number1);
//number1.push(number2);
//console.log(number1);


// tutorial 12 = map()

var result = number1.map((num)=>{
    return 2*num;
});
console.log(result);
console.log(number1);


// tuterial 13 = reduce  {Very important}

var sum = number1.reduce((previousValue,currentValue)=>{
    return previousValue + currentValue;
}, 0)
console.log(sum);

// tutorial 14 = key values

const obj ={
    name: "Antik",
    age: 18,
    sex: "male",
    instritution: "AIUB",
    Address: "Dhaka"
}

var keys = Object.keys(obj);
var values = Object.values(obj);
var entry = Object.entries(obj);
console.log(keys);
console.log(values);
console.log(entry);

// tuterial 16 default parameter value










