function check(num) {
  if (num < 0) {
    throw new Error("The number cannot be negative.");
  } else {
    console.log("Number is not negative");
  }
}

try {
  var num = prompt("Enter number:");
  check(parseInt(num));
} catch (error) {
  console.log("Error:", error.message);
}
