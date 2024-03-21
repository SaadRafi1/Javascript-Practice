const value1 = parseFloat(prompt("Enter side 1:"));
const value2 = parseFloat(prompt("Enter side 2:"));
const value3 = parseFloat(prompt("Enter side 3:"));

var cal = (value1 + value2 + value3) / 2;

var area = Math.sqrt(cal * (cal - value1) * (cal - value2) * (cal - value3));

console.log(area);
