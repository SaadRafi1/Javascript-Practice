let val1 = parseInt(prompt("ENTER First VALUE:"));
let val2 = parseInt(prompt("ENTER Second VALUE:"));
let val3 = parseInt(prompt("ENTER Third VALUE:"));

if (
  val1 % 10 === val2 % 10 &&
  val2 % 10 === val3 % 10 &&
  val3 % 10 === val1 % 10
) {
  console.log("Yes it is same");
} else {
  console.log("No it is not same");
}
