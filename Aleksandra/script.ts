class Person {
    fName : string;
    lName : string;
    age : number;
    jobTitle : string;
    constructor(a, b, c, d) {
        this.fName = a;
        this.lName = b;
        this.age = c;
        this.jobTitle = d;
    }

    showMessage() {
        return `<p>Hello there, My name is ${this.fName} ${this.lName} and I am ${this.age} years old, and I am a ${this.jobTitle}</p>`
    }
} 

var person1 = new Person("Ella", "Smith", 31, "Web Developer");
//document.getElementById("demo").innerHTML = person1.showMessage();

class MoreInfo extends Person {
    salary : number;
    jobLocation : string;
    constructor(a, b, c, d, e, f) {
        super(a, b, c, d);
        this.salary = e;
        this.jobLocation = f;
    }
    showMessage() {
        return `${super.showMessage()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
    }
}

var person11 = new MoreInfo("Ella", "Smith", 31, "Web Developer", 3000, "Vienna");

document.getElementById("demo").innerHTML = person11.showMessage();