class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

const vehicle = new Vehicle("Honda", "Civic", 2005);
vehicle.displayDetails();

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Number of Doors: ${this.doors}`);
  }
}
const car = new Car("Honda", "Civic", 2005, 4);
car.displayDetails();
