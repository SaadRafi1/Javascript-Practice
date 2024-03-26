function btd(binary) {
  if (binary === "0" || binary === "") {
    return 0;
  } else {
    const lastDigit = parseInt(binary[binary.length - 1]);
    const remainingBinary = binary.substring(0, binary.length - 1);
    return btd(remainingBinary) * 2 + lastDigit;
  }
}

console.log(btd("1010"));
console.log(btd("1101"));
