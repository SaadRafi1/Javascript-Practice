function arraycheck(arr) {
  if (arr.length === 0) {
    throw new Error("The array cannot be empty.");
  }
}

const array = [];
try {
  arraycheck(array);
  console.log("The array is not empty.");
} catch (error) {
  console.log("Error:", error.message);
}
