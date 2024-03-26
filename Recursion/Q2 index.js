function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
const num1 = 36;
const num2 = 48;
console.log(`GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);
