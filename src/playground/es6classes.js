class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old `;
    }
}
class Student extends Person{
    constructor(name,age,major){
    super(name,age);
    this.major = major;
}
hasMajor(){
    let description = super.getDescription();
    return `${description} and studies ${this.major}`;
}
}
const student1 = new Student("Seline",24,"Science");
console.log(student1.hasMajor());