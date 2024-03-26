class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.species} makes ${this.sound}`);
  }
}
class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    super.makeSound();
    console.log(`The color of the dog is ${this.color}`);
  }
}
const dog = new Dog("Dog", "bark", "brown");
dog.makeSound();
