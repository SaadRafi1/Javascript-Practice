class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid amount for deposit.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Insufficient funds or invalid amount for withdrawal.");
    }
  }

  transfer(amount, recipientAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      recipientAccount.balance += amount;
      console.log(
        `Transferred $${amount} to account ${recipientAccount.accountNumber}. Your new balance: $${this.balance}`
      );
    } else {
      console.log("Insufficient funds or invalid amount for transfer.");
    }
  }
}

const account1 = new BankAccount(123456, "John Doe", 1000);
const account2 = new BankAccount(654321, "Jane Smith", 500);

account1.deposit(500);
account2.withdraw(200);
account1.transfer(300, account2);
