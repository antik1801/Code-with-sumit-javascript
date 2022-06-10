const s={
    searchByIndex: function()
    {
        let locate = "Please locate where Locate keyword is ?";
        console.log(locate.indexOf("locate"));
    },
    match: function()
    {
        let txt = "The rain is SPAIN stands mainly in the plain";
        console.log(txt.match(/ain/g));
    },
    include: function()
    {
        let txt2= "Lier Lier burn on fire";
        console.log(txt2.includes("burn"));
        console.log(txt2.includes("on", 15));
    },
    STartsWith: function()
    {
        let h="Hello world welcome to the universe!";
        console.log(h.startsWith("Hello"));
        console.log(h.startsWith("world", 6));
    },
    ENdswith: function()
    {
        var e = "Hello world welcome to the universe!";
        console.log(e.endsWith("world", 11));
    },
}
console.log(s.searchByIndex());
console.log(s.match());
console.log(s.include());
console.log(s.STartsWith());
console.log(s.ENdswith());