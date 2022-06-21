const a ={
    name : "Bangladesh",
    district : 64,
    antik: function()
    {
        let str = "Apple, Banana, Dog";
        console.log(str.slice(7,13));
    },
    substring: function()
    {
        var sakina = "i am in a love with sakina";
        console.log(sakina);
        var sakina = sakina.replace("sakina","zarina");
        console.log(sakina);
    },
    uppercase : function()
    {
        let ucase = "This strings convert to uppercase using touppercase";
        let Ucase = ucase.toUpperCase();
        console.log(ucase);
        console.log(Ucase);
    },
    lowercase: function()
    {
        let lcase = "THIS IS A LOWERCASE CONVERT FUNCTION USING #TOLOWERCASE";
        let Lcase = lcase.toLowerCase();
        console.log(lcase);
        console.log(Lcase);
    },
    
    concate: function()
    {
        let text1 = "Hellow";
        let text2 = "World!";
        let text3 = text1.concat(" ", text2);
        let text4 = text1.concat(" come on fuck me now ", text2);
        console.log(text1);
        console.log(text2);
        console.log(text3);
        console.log(text4);
    },
    trim: function()
    {
        let text5 = "       Hallow World!     ";
        let text6 = text5.trim();
        console.log(text6);
    },
    padding: function()
    {
        let text7 = "hikk";

        console.log(text7.padStart(10,0));
        console.log(text7.padEnd(10,1));
    },
    charAt: function()
    {
        let a1="ghumaiami";
        let a2= a1.charCodeAt(3);
        let a3= a1.charAt(5);

        console.log(a2);
        console.log(a3);
    },
    split: function()
    {
        let x = "Hellow, |world";
        let y= x.split(",");
        let z=x.split(" ");
        let p=x.split("|");
        let f=x.split("");
        console.log(y);
        console.log(z);
        console.log(p);
        console.log(f);
        
    },
}
console.log(a);
const s= "Bangladesh";
console.log(s.length);
console.log(a.antik());
console.log(a.substring());
console.log(a.uppercase());
console.log(a.lowercase());
console.log(a.concate());
console.log(a.trim());
console.log(a.padding());
console.log(a.charAt());
console.log(a.split())


