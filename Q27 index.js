let user = prompt("Enter string:");
if (!user.trim()) {
  console.log("Input is empty");
} else if (user.startsWith("Java")) {
  console.log("The string is starting with java:");
} else {
  console.log("The string is not startig with java:");
}
