function variable() {
  try {
    return undefinedVariable;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Error: Variable not defined.");
    } else {
      console.log("Error:", error.message);
    }
  }
}

variable();
