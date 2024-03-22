function stringchange(input) {
  if (input.length < 3) {
    return input.toUpperCase();
  } else return input.substring(0, 3).toLowerCase() + input.substring(3);
}

var input = prompt("Enter string:");
var manipulate = stringchange(input);
console.log(manipulate);
