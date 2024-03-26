function string_parameterize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
console.log(string_parameterize("Robin Singh from USA."));
