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
var array = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(carName, carModel, carKilometers, carYear) {
        this.carName = carName;
        this.carModel = carModel;
        this.carKilometers = carKilometers;
        this.carYear = carYear;
        array.push(this);
        console.table(array);
    }
    return Vehicles;
}());
var newCar = new Vehicles("Pagani", "Huayra", 10000, 2019);
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(carName, carModel, carKilometers, carYear, seats, fuelType) {
        var _this = _super.call(this, carName, carModel, carKilometers, carYear) || this;
        _this.seats = seats;
        _this.fuelType = fuelType;
        return _this;
        // array.push(this);
        // console.table(array);
    }
    return Motorbikes;
}(Vehicles));
var newMotorbike = new Motorbikes("Honda", "H", 15000, 2015, 2, "diesel");
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(carName, carModel, carKilometers, carYear, wheels) {
        var _this = _super.call(this, carName, carModel, carKilometers, carYear) || this;
        _this.wheels = wheels;
        return _this;
        //  array.push(this);
        //  console.table(array);
    }
    return Trucks;
}(Vehicles));
var newTruck = new Trucks("Mercedes", "Benz", 158000, 2012, 10);
console.log(newTruck);
var btns = document.getElementsByClassName("buttons");
for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    function alertt() {
        window.alert("Working");
    }
    btn.addEventListener("click", alertt);
}
