function find(start, end) {
  const leapYears = [];

  for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }

  return leapYears;
}
const start = 2002;
const end = 2023;
console.log("Leap Years are ", start, "and", end, "are:", find(start, end));
