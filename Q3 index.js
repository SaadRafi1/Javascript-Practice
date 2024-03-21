var now = new Date();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();

var formattedDate = month + "-" + day + "-" + year;
console.log(formattedDate);
var formattedDate = month + "/" + day + "/" + year;
console.log(formattedDate);
var formattedDate = day + "-" + month + "-" + year;
console.log(formattedDate);
var formattedDate = day + "/" + month + "/" + year;
console.log(formattedDate);
