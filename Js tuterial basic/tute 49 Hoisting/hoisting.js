// Hoisting is the default behaviour moving declearation to the top
//declearation to the top
// in javascripe a variablle can be declare at the top



//let and const keyword hoist the veriable but it doesnot undefined the veriable

 x = 5;
 console.log(x);
 var x;

 console.log(a);

 var a = "Bangladesh";

//console.log(say);

//let say = "Bangladesh";

var LANGUAGE = 'java';
var language = 'javascript';

function getLanguage()
{
    if(!language) {
        var language = LANGUAGE;
    }
    return language;
}
console.log(`I love ${getLanguage()}`);

let LANGUAGEA = 'java';
let languageA = 'javascript';

function getLanguageA()
{
    if(!language) {
        let languageA = LANGUAGEA;
    }
    return language;
}
console.log(`I love ${getLanguageA()}`);