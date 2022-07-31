const math={
    round: function()
    {
        console.log(Math.round(4.5));
        console.log(Math.round(4.3));
        console.log(Math.round(4.1));
        console.log(Math.round(4.9));
    },
    ceiling: function()
    {
        console.log(Math.ceil(4.9));
        console.log(Math.ceil(-4.9));
    },
    trunc: function()
    {
        console.log(Math.trunc(4.5));
        console.log(Math.trunc(6.5));
        console.log(Math.trunc(5.5));
    },
    sign: function()
    {
        console.log(Math.sign(-4.5));
        console.log(Math.sign(4.5));
        console.log(Math.sign(0));
    },
    pow: function()
    {
        console.log(Math.pow(8,2));
    },
    sqrt: function()
    {
        console.log(Math.sqrt(64));
    },
    abs: function()
    {
        console.log(Math.abs(-4.7));
        console.log(Math.abs(-8.7));
    },
    sin: function()
    {
        console.log("---------------------");
        console.log(Math.asinh(4));
        console.log(Math.sin(90)); // Math.sin(redian)
        console.log(Math.sin(45*Math.PI/180)); // Math.sin(degree*pi/180)
    },
    min: function()
    {
        console.log(Math.min(40,60,90,25,45,11));
    },
    max: function()
    {
        console.log(Math.max(40,60,20,11,90,108,25,70));
    },
    random: function()
    {
        console.log(Math.random());
    },
    log: function()
    {
        console.log(Math.E); //Euler Number
        console.log(Math.log(51)); // Log means how many times we have to multiply of thaht number to get this number

    },
    log2: function()
    {
        console.log(Math.log2(8)); // how many  times we have to multiply 2
    },
    log10: function()
    {
        console.log(Math.log10(2000000));
    },
    acos: function()
    {
        console.log(Math.cos(Math.PI));
        console.log(Math.acos(-1)); //returns PI
        console.log(Math.acos(0)); //returns PI/2
        console.log(Math.acos(1)); //returns 0
    },

    cbrt: function()
    {
        console.log(Math.cbrt(125));
    },
    randint: function()
    {
        console.log("-----randint---");
       console.log(Math.floor(Math.random()*10)); //output from 0-9
       console.log(Math.floor(Math.random()*11)); //output from 0-9
    },

}
math.round();
math.ceiling();
math.trunc();
math.sign();
math.pow();
math.sqrt();
math.abs();
math.sin();
math.min();
math.max();
math.random();
math.log();
math.log2();
math.log10();
math.acos();
math.cbrt();
math.randint();

/*
1. Write a JavaScript function to convert a number from one base to another. Go to the editor
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10"
*/

var toBaseConversion=function(number,init_base,convert_base)

{
    if((init_base && convert_base)<2 || (init_base && convert_base)>36){
        return `The base should be between 2 and 36`;
    }
    var par = parseInt(number,init_base);
    return (par.toString(convert_base));
}

console.log(toBaseConversion(`E164`,16,8));
console.log(toBaseConversion(1000,2,8));

/*
2. Write a JavaScript function to convert a binary number to a decimal number. Go to the editor
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4
*/

var bin_to_dec = function (number)
{
        console.log(parseInt(number,2));
}
bin_to_dec('110011');
bin_to_dec('100');

var dec_to_bho = function (dec,bho)
{
    if(bho=='B' || bho =='b' || bho== 2) dec.toString(2);
    else if(bho=='H' || bho =='h' || bho== 16) dec.toString(16);
    else if(bho == 'O' || bho =='o' || bho == 8) dec.toString(8);
    else return `Please enter valid converting number`;
}
console.log(dec_to_bho(120,'B')); 

var randInt = function(min,max)
{
    if(min>max)
    {
        temp = min;
        min = max;
        max = temp;
    }
   if(min==null && max==null) return 0;
   if(max == null) {
    max = min;
    min = 0;
   }
   var rand =  Math.random() * (max - min + 1);
   return Math.floor(rand);
   // return start + math.floor(Math.random() * (end - start + 1));

}

console.log(randInt(20,1));
console.log(randInt(1,10));
console.log(randInt(6));
console.log(randInt());

/*
Write a JavaScript function to format a number up to specified decimal places.

Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10"
"2.100"
"2100.00"
*/

function fixedValue(number,value)
{
    number = parseFloat(number) || 0;
    return number.toFixed(value);
}
console.log(fixedValue(2.0007,2));