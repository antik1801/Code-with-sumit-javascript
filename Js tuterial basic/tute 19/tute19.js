const a={
    e : function()
    {
        let x= 123e3;
        let y=123e3-2;
        console.log(x);
        console.log(y);
    },
    number: function()
    {
        // let mynumber=2;
        // while(mynumber = Infinity)
        // {
        //     mynumber = mynumber * mynumber ;
        //     console.log(mynumber);
        // }
    },
    tobaseConversion: function()
    {
        let myNumber= 32;
        console.log(myNumber.toString(10));
        console.log(myNumber.toString(8));
        console.log(myNumber.toString(32));
        console.log(myNumber.toString(12));
        console.log(myNumber.toString(2));
        
    }
}
a.e();
// a.number();
a.tobaseConversion();
