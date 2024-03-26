function abbrev_name(str) {
  const parts = str.split(" ");
  if (parts.length > 1) {
    return parts[0] + " " + parts[1].charAt(0) + ".";
  } else {
    return str;
  }
}
console.log(abbrev_name("Robin Singh"));
