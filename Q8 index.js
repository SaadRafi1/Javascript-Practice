var random = Math.floor(Math.random() * 10) + 1;

var user = parseInt(prompt("Enter number to guess between 1-10:"));

if (user === random) {
  console.log("You won");
} else {
  console.log("You lose the guess number was : " + random);
}
