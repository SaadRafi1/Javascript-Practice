function divide(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Both parameters must be numbers.");
    }
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.log(
      error instanceof TypeError ? "TypeError:" : "Error:",
      error.message
    );
  }
}

var a = prompt("Enter value 1 :");
var b = prompt("Enter value 2 :");
console.log(divide(a, b));
