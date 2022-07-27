const person = {
    firstname: "John",
    lastame: "Doe",
    age: 18,
    sex: "male",
    height: 5.8,
    fullname: function(){
      var  fullname = this.firstname+ " " + this.lastame;
        console.log(fullname);
    },
};
document.getElementById("demo").innerHTML = person.fullname();
person.fullname();