class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}
const rectangle = new Rectangle(9, 15);
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();
console.log("Area of rectangle is:", area);
console.log("Area of perimeter is :", perimeter);
