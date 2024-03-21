let largestnumber;
let val1 = parseInt(prompt("ENTER First VALUE:"));
let val2 = parseInt(prompt("ENTER Second VALUE:"));
let val3 = parseInt(prompt("ENTER Third VALUE:"));

if (val1 > val2 && val1 > val3) {
  largestnumber = val1;
} else if (val2 > val1 && val2 > val3) {
  largestnumber = val2;
} else {
  largestnumber = val3;
}
console.log("The largest Number is:" + largestnumber);
