class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  displayDetails() {
    console.log(
      `Account Number: ${this.accountNumber}, Balance: $${this.balance}`
    );
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance is $${this.balance}`);
    } else {
      console.log("Invalid amount for deposit.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance is $${this.balance}`);
    } else {
      console.log("Insufficient funds or invalid amount for withdrawal.");
    }
  }
}

const bankAccount = new BankAccount(204, 18);
bankAccount.displayDetails();
bankAccount.deposit(100);
bankAccount.withdraw(10);
bankAccount.displayDetails();
