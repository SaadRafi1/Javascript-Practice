function base_convert(number, fromBase, toBase) {
  if (typeof number !== "string") {
    number = number.toString();
  }
  const decimalNumber = parseInt(number, fromBase);
  const convertedNumber = decimalNumber.toString(toBase);

  return convertedNumber;
}
console.log(base_convert("E164", 16, 8));
console.log(base_convert(1000, 2, 8));
