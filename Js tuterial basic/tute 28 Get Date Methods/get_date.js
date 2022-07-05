var d;
d =new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const a = {
    Gettime: function()
    {
        
        console.log(d.getTime()); // It will return how many miliseconds since 1970 and now
    },
    GetFullYear: function()
    {
        d= new Date();
        console.log(d.getFullYear());
    },
    Getmonth: function()
    {
        console.log(d.getMonth());
    },
    printmonth: function()
    {
        console.log(months[d.getMonth()]);
        //return the name of the month
    },
    Gethours: function()
    {
        console.log(d.getHours());
        //return hours
    },
}
a.Gettime();
a.GetFullYear();
a.Getmonth();
a.printmonth();
a.Gethours();