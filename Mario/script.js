var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Basic1:
Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
*/
var personArray = [];
// interface PersonInterface {
//     wName: string;
//     age: number;
//     jobTitle: string;
//     personMessage: Function;
//  }
var Person = /** @class */ (function () {
    // console.log(this);
    function Person(wName, age, jobTitle) {
        this.wName = wName;
        this.age = age;
        this.jobTitle = jobTitle;
        console.log(this);
        personArray.push(this);
        console.table(personArray);
    }
    Person.prototype.personMessage = function () {
        return "Hello there, My name is " + this.wName + " and I am " + this.age + " years old and i am a " + this.jobTitle;
    };
    return Person;
}());
var policeman = new Person("Michael Johnson", 42, "policeman");
console.log(policeman.personMessage());
/*Basic 2
Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”*/
var personDetails = /** @class */ (function (_super) {
    __extends(personDetails, _super);
    function personDetails(wName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, wName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    personDetails.prototype.personMessage = function () {
        return _super.prototype.personMessage.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return personDetails;
}(Person));
var fireman = new personDetails("John Petersen", 35, "fireman", 3000, "Vienna");
console.log(fireman.personMessage());
