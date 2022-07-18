const a= {
    toexponential: function ()
    {
        let x= 9;
        console.log(x.toExponential(3));
    },
    tofix: function()
    {
        let x= 9.658845;
        console.log(x.toFixed(3));
    },
    parsetint: function()
    {
        let x = 10.25658
        console.log(parseInt(x));
    },
    property: function()
    {
        console.log(Number.MIN_VALUE);
        console.log(Number.MAX_VALUE);
        console.log(Number.POSITIVE_INFINITY);
        console.log(Number.NEGATIVE_INFINITY);
    },
}

a.toexponential();
a.tofix();
a.parsetint();
a.property();