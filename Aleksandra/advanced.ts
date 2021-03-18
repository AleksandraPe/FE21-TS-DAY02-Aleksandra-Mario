var array: Array<Vehicles> = [];

class Vehicles {
    carName : string;
    carModel: string;
    carKilometers: number;
    carYear: number;

    constructor (carName, carModel, carKilometers, carYear) {
        this.carName = carName;
        this.carModel = carModel;
        this.carKilometers = carKilometers;
        this.carYear = carYear;
        array.push(this);
        console.table(array);
    }
}

let newCar = new Vehicles("Pagani", "Huayra", 10000, 2019);

class Motorbikes extends Vehicles {
    seats : number;
    fuelType : string;
    constructor(carName, carModel, carKilometers, carYear, seats, fuelType) {
        super(carName, carModel, carKilometers, carYear);
        this.seats = seats;
        this.fuelType = fuelType;
        // array.push(this);
        // console.table(array);
    }
}
let newMotorbike = new Motorbikes("Honda", "H", 15000, 2015, 2, "diesel");

class Trucks extends Vehicles {
    wheels : number;
    constructor(carName, carModel, carKilometers, carYear, wheels) {
        super(carName, carModel, carKilometers, carYear);
        this.wheels = wheels;
        //  array.push(this);
        //  console.table(array);
    }
}
let newTruck = new Trucks("Mercedes", "Benz", 158000, 2012, 10);
console.log(newTruck);

var btns = document.getElementsByClassName("buttons");

for( let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    function alertt(){
        window.alert("Working");
    }
    btn.addEventListener("click", alertt);
}

