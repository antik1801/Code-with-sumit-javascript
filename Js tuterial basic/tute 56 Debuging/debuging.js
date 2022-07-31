

class person {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    play(status)
    {
        console.log(`${this.name} aged ${this.age} is playing ${status}`);
    }
}

const person1 = new person("Sakib");
const person2 = new person("Tamim",35);

person1.play("well");
person2.play("bad")