/*Basic1:
Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
*/
let personArray: Array<Person> = [];


// interface PersonInterface {
//     wName: string;
//     age: number;
//     jobTitle: string;
//     personMessage: Function;
//  }
 
 class Person {
    wName:string;//whole Name
    age:number;
    jobTitle:string;
    // console.log(this);
   

    constructor(wName:string,age:number,jobTitle:string) {
        this.wName = wName;
        this.age = age;
        this.jobTitle = jobTitle;
        console.log(this);
        personArray.push(this);
        console.table(personArray);
    }
    personMessage(){
       return `Hello there, My name is ${this.wName} and I am ${this.age} years old and i am a ${this.jobTitle}`
    }

 }

 let policeman = new Person ("Michael Johnson",42,"policeman");

 console.log(policeman.personMessage());



 /*Basic 2
Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”*/


class personDetails extends Person {
    salary:number;
    jobLocation:string;

    constructor(wName:string,age:number,jobTitle:string,salary:number,jobLocation:string) {
        super(wName,age,jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    
    personMessage(){
        return `${super.personMessage()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }

}

let fireman = new personDetails ("John Petersen", 35, "fireman", 3000, "Vienna")

console.log(fireman.personMessage());
