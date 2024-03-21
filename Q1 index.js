Q1;

var now = new Date();
var month = now.getMonth() + 1;

var listofdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Today is:" + listofdays[month] + ".");

var hour = now.getHours();
var min = now.getMinutes();
var second = now.getSeconds();

if (hour >= 12) {
  prepand = " PM";
  hour = hour % 12 || 12;
} else {
  prepand = " AM";
  hour = hour % 12 || 12;
}
console.log("Current Time: " + hour + prepand + " : " + min + " : " + second);
