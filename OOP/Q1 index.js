class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  displayDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`
    );
  }
}
const person1 = new Person("Saad", 24, "Pakistan");
const person2 = new Person("Fahad", 22, "Pakistan");
console.log("Person 1:");
person1.displayDetails();
console.log("Person 2:");
person2.displayDetails();
