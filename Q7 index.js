for (let i = 2014; i <= 2050; i++) {
  console.log;
}

for (let i = 2014; i <= 2050; i++) {
  let jan1st = new Date(i, 0, 1);

  if (jan1st.getDay() === 0) {
    console.log("January 1st, " + i + " is Sunday.");
  }
}
