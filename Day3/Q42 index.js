function check(num1, num2, num3) {
  if (val1 < val2 && val2 < val3) {
    return "Strict mode";
  } else if ((val1 <= val2 && val2 < val3) || (val1 < val2 && val2 <= val3)) {
    return "Soft mode";
  } else {
    return "Neither strict nor soft mode";
  }
}

const val1 = 10,
  val2 = 15,
  val3 = 31;
console.log(check(val1, val2, val3));
