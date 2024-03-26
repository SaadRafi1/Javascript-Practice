class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }
  add(branchName) {
    this.branches.push(branchName);
    console.log(`Branch '${branchName}' added successfully.`);
  }
  remove(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch '${branchName}' removed successfully.`);
    } else {
      console.log(`Branch '${branchName}' not found.`);
    }
  }
  display() {
    if (this.branches.length === 0) {
      console.log("No branches available.");
    } else {
      console.log(`Branches of ${this.bankName}:`);
      this.branches.forEach((branch) => console.log(branch));
    }
  }
}
const bank = new Bank("Example Bank");
bank.add("Main Branch");
bank.add("Downtown Branch");
bank.add("East Branch");
bank.display();
bank.remove("Downtown Branch");
bank.display();
