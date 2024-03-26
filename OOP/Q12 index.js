class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  add(name) {
    this.departments.push(name);
    console.log(`Department '${name}' added successfully.`);
  }

  remove(name) {
    const index = this.departments.indexOf(name);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department '${name}' removed successfully.`);
    } else {
      console.log(`Department '${name}' not found.`);
    }
  }

  display() {
    if (this.departments.length === 0) {
      console.log("No departments available.");
    } else {
      console.log(`Departments of ${this.name}:`);
      this.departments.forEach((department) => console.log(department));
    }
  }
}

const university = new University("ABC University");

university.add("Computer Science");
university.add("Physics");
university.add("Biology");

university.display();

university.remove("Physics");

university.display();
