var str = prompt("Enter the string:");
const rule = /[aeiou]/gi;
var count = str.match(rule);

if (count !== null) {
  console.log(count.length);
} else {
  console.log("No vowels found in the string.");
}
