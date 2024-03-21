var user1 = parseInt(prompt("Enter value 1:"));
var user2 = parseInt(prompt("Enter value 2:"));
var sum;
if (user1 === user2) {
  sum = (user1 + user2) * 3;
  console.log("Both value are same the sum is:" + sum);
} else {
  sum = user1 + user2;
  console.log("The sum is " + sum);
}
