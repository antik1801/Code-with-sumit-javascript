// লুডু খেলায় কিভাবে আমরা ১ থেকে ৬ প্রিন্ট করতে পারি ?
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  console.log(getRndInteger(1,6));

  //কিভাবে আমরা আমাদের শ্রেণীকক্ষের সবার নাম Alphabetically সাজাতে পারি
  const students = ["sumit","saad","Daiyan","Akash"];
  console.log(students.sort());

  //কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি
  const roll_number = [5,7,3,9,1,6];
  console.log(roll_number.sort(function(a,b){return a - b;}));
 
 
  //কোন সাল লিপ ইয়ার কিনা তা বের কর

  function isLeapyear(year)
  {
    if((year % 400 === 0) || (year % 4===0 && year % 100 !=0))
    {
        console.log(`${year} is a leap year`);
    } else{
        console.log(`${year} is not a leap year`);
    }
  }
  isLeapyear(2028);
 
  //কোন Sentence ে কতগুলা vowel আছে তা কিভাবে নিরধারন করা যায় ?


  const vowel = ["a","e","i","o","u","A","E","I","O","U"];

  function countVowels(sentence)
  {
    let count = 0;
    let letter = Array.from(sentence);  // Array.from change a array from string
    letter.forEach(function(value,index,array){ 
                                                                     // foreach(function(value,index,array)) check every value of an array
        if(vowel.includes(value)){
            count++;
        }
    })
    return count;
  }
  
  console.log(countVowels("i love Bangladesh"));

  // কোন array থেকে Duplicate নাম্বার গুলা কিভাবে বের করে আনতে পারি

  const numbers = [1, 4, 7, 6, 4, 5, 6, 7, 9, 8];

  const duplicate = numbers.filter(function(value,index,array){
   return array.indexOf(value) !== index;  // uniqque value array.indexof(value) === index;
  })
  console.log(duplicate);