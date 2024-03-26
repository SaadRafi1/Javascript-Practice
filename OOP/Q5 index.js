class Shape {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    const area = this.length * this.width;
    console.log(`Area is ${area}`);
    return area;
  }
}

const shape = new Shape(10, 20);
shape.calculateArea();

class Circle extends Shape {
  constructor(radius) {
    super(radius, radius);
    this.radius = radius;
  }
  calculateArea() {
    const area = Math.PI * this.radius ** 2;
    console.log(`Circle Area is ${area}`);
    return area;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super(base, height);
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    const area = 0.5 * this.base * this.height;
    console.log(`Triangle Area is ${area}`);
    return area;
  }
}

const circle = new Circle(4);
circle.calculateArea();

const triangle = new Triangle(9, 7);
triangle.calculateArea();
