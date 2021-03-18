/*Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

-Create a Parent Class called Vehicles
-Define properties and methods for the super Class
-Consider the inheritance concept
-Define 2 other Child classes and name them Motorbikes and Trucks
-Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
*/




let carArray:Array<Vehicles> = [];

class Vehicles {
    model:string;
    kilometers:number;
    seatNumber:number;
    fuelType:string;
    productionYear:number;

    constructor(model, kilometers, seatNumber, fuelType, productionYear){
        this.model = model;
        this.kilometers = kilometers;
        this.seatNumber = seatNumber;
        this.fuelType = fuelType;
        this.productionYear = productionYear
        carArray.push(this);
        console.table(carArray);// no instance yet, so no output
    }

}

let supra = new Vehicles("Toyota Supra", 20000, 2, "gasoline", 2020);

// console.log(supra.model);


class Motorbikes extends Vehicles {
    cylinders:number;
    cubicCapacity:number;

    constructor(model, kilometers, seatNumber, fuelType, productionYear, cylinders, cubicCapacity) {
        super(model, kilometers, seatNumber, fuelType, productionYear);
        this.cylinders = cylinders;
        this.cubicCapacity = cubicCapacity;
    }

}


let ninja = new Motorbikes("Kawasaki Ninja", 23000, 1, "gasoline", 2015, 4, 1400);

console.log(ninja.model);


class Trucks extends Vehicles {
    wheels:number;
    vehiclePayload:number;

    constructor(model, kilometers, seatNumber, fuelType, productionYear, wheels, vehiclePayload) {
        super(model, kilometers, seatNumber, fuelType, productionYear);
        this.cylinders = cylinders;
        this.cubicCapacity = cubicCapacity;
    }
    
}