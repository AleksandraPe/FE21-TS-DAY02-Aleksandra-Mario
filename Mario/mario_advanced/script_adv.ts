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
    image:string;

    constructor(model, kilometers, seatNumber, fuelType, productionYear, image) {
        this.model = model;
        this.kilometers = kilometers;
        this.seatNumber = seatNumber;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
        this.image = image;
        carArray.push(this);
        console.table(carArray);// no instance yet, so no output
    }

}

let supra = new Vehicles("Toyota Supra", 20000, 2, "gasoline", 2020, "https://cdn.pixabay.com/photo/2021/01/04/07/58/jdm-5886801_960_720.jpg");

// console.log(supra.model);


class Motorbikes extends Vehicles {
    cubicCapacity:number;

    constructor(model, kilometers, seatNumber, fuelType, productionYear, image, cubicCapacity) {
        super(model, kilometers, seatNumber, fuelType, productionYear, image);
        this.cubicCapacity = cubicCapacity;
    }

}


let ninja = new Motorbikes("Kawasaki Ninja", 23000, 1, "gasoline", 2015, "https://cdn.pixabay.com/photo/2016/09/02/12/44/bike-1639091_960_720.jpg", 1400);

console.log(ninja.model);



class Trucks extends Vehicles {
    wheels:number;
    
    constructor(model, kilometers, seatNumber, fuelType, productionYear, image, wheels) {
        super(model, kilometers, seatNumber, fuelType, productionYear, image);
        this.wheels = wheels;
    }
    
}


let r450 = new Trucks("Scania R450", 200000, 3, "diesel", 2015, "https://cdn.pixabay.com/photo/2015/07/08/10/38/truck-835863_960_720.jpg", 8); 