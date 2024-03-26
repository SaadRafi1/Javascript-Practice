class Staff {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Staff {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = baseSalary * 0.1;
    return baseSalary + bonus;
  }
}

const manager1 = new Manager("Moazzam", 60000, "IT");
const manager2 = new Manager("Salal", 75000, "IT");
const annualSalaryManager1 = manager1.calculateAnnualSalary();
const annualSalaryManager2 = manager2.calculateAnnualSalary();
console.log("Manager 1 Annual Salary:", annualSalaryManager1);
console.log("Manager 2 Annual Salary:", annualSalaryManager2);
