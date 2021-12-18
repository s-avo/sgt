class Vehicle {

    constructor(color, horsepower) {
        this.color = color
        this.horsepower = horsepower
    }

    ride() {
        // more code here...
    }

    checkIfPassengerIsDrunk(passenger) {
        return passenger.isDrunk()
    }
}

module.exports = { Vehicle }