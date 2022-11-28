/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car{
    constructor(model){
        this.model = model
        this.currentSpeed = 0
    }
    accelerate(){
        this.currentSpeed++

    }
    brake(){
        this.currentSpeed--
    }
    toString(){
        console.log(`The ${this.model} is at a speed of ${this.currentSpeed} MPH`)

    }
}

const ford = new Car('Ford')
console.log(ford)
ford.accelerate();
ford.accelerate()
ford.brake()
ford.toString()


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car{
    constructor(model, topSpeed, isElectric = true){
        super(model, topSpeed)
        this.isElectric = isElectric
    }
}
const tesla = new ElectricCar('Tesla')
console.log(tesla)
tesla.accelerate()
tesla.accelerate()
tesla.brake()
tesla.toString()
