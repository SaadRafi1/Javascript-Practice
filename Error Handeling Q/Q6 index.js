function check(str) {
  if (str.length === 0) {
    throw new Error("The string is empty");
  }
}

let str = prompt("Enter string:");
try {
  check(str);
  console.log("The string is not empty");
} catch (error) {
  console.log("Error:", error.message);
}
