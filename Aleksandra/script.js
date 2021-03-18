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
var Person = /** @class */ (function () {
    function Person(a, b, c, d) {
        this.fName = a;
        this.lName = b;
        this.age = c;
        this.jobTitle = d;
    }
    Person.prototype.showMessage = function () {
        return "<p>Hello there, My name is " + this.fName + " " + this.lName + " and I am " + this.age + " years old, and I am a " + this.jobTitle + "</p>";
    };
    return Person;
}());
var person1 = new Person("Ella", "Smith", 31, "Web Developer");
//document.getElementById("demo").innerHTML = person1.showMessage();
var MoreInfo = /** @class */ (function (_super) {
    __extends(MoreInfo, _super);
    function MoreInfo(a, b, c, d, e, f) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.salary = e;
        _this.jobLocation = f;
        return _this;
    }
    MoreInfo.prototype.showMessage = function () {
        return _super.prototype.showMessage.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return MoreInfo;
}(Person));
var person11 = new MoreInfo("Ella", "Smith", 31, "Web Developer", 3000, "Vienna");
document.getElementById("demo").innerHTML = person11.showMessage();
