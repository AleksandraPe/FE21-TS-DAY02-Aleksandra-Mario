/*Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

-Create a Parent Class called Vehicles
-Define properties and methods for the super Class
-Consider the inheritance concept
-Define 2 other Child classes and name them Motorbikes and Trucks
-Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
*/
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
var carArray = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(model, kilometers, seatNumber, fuelType, productionYear, image) {
        this.model = model;
        this.kilometers = kilometers;
        this.seatNumber = seatNumber;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
        this.image = image;
        carArray.push(this);
        console.table(carArray); // no instance yet, so no output
    }
    return Vehicles;
}());
var supra = new Vehicles("Toyota Supra", 20000, 2, "gasoline", 2020, "https://cdn.pixabay.com/photo/2021/01/04/07/58/jdm-5886801_960_720.jpg");
// console.log(supra.model);
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(model, kilometers, seatNumber, fuelType, productionYear, image, cubicCapacity) {
        var _this = _super.call(this, model, kilometers, seatNumber, fuelType, productionYear, image) || this;
        _this.cubicCapacity = cubicCapacity;
        return _this;
    }
    return Motorbikes;
}(Vehicles));
var ninja = new Motorbikes("Kawasaki Ninja", 23000, 1, "gasoline", 2015, "https://cdn.pixabay.com/photo/2016/09/02/12/44/bike-1639091_960_720.jpg", 1400);
console.log(ninja.model);
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(model, kilometers, seatNumber, fuelType, productionYear, image, wheels) {
        var _this = _super.call(this, model, kilometers, seatNumber, fuelType, productionYear, image) || this;
        _this.wheels = wheels;
        return _this;
    }
    return Trucks;
}(Vehicles));
var r450 = new Trucks("Scania R450", 200000, 3, "diesel", 2015, "https://cdn.pixabay.com/photo/2015/07/08/10/38/truck-835863_960_720.jpg", 8);
