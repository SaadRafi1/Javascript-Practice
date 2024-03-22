var user = parseInt(prompt("Enter a postive number :"));

if (user < 0) {
  console.log("Enter a positive numbber");
} else if (user % 3 === 0 || user % 7 === 0) {
  console.log("Yes it is a multiple");
} else {
  console.log("No it is not a multiple");
}
