function array(arr, index) {
  try {
    return arr[index];
  } catch (error) {
    if (error instanceof RangeError) {
      console.log("Error: Index out of range.");
    } else {
      console.log("Error:", error.message);
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let index = parseInt(prompt("Enter number:"));
console.log("Result:", array(arr, index));
