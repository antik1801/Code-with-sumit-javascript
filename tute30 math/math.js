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