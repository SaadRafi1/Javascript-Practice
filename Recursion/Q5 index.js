function exponent(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * exponent(base, exp0 - 1);
  }
}
const base = 8;
const expo = 2;
const result = exponent(base, expo);
console.log(result);
