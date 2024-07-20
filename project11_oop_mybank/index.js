"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
;
// Bank Account class
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Debit money
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    ;
    // Credit money
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; //$1 fee charged if more then $100 is deposited 
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. Remaining balance: $${this.balance}`);
    }
    // Check balance
    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
    }
}
;
// Customer class
class customer {
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Create bank  account
let accounts = [
    new BankAccount(1001, 1000),
    new BankAccount(1002, 2000),
    new BankAccount(1003, 3000)
];
// Create customers
let customers = [
    new customer("Ayaan", "Rashid", "Male", 25, 9876543210, accounts[0]),
    new customer("Rayaan", "Khan", "Male", 30, 9876543211, accounts[1]),
    new customer("Asma", "Muslim", "Female", 28, 9876543212, accounts[2])
];
// Function to interact with bank account
function service() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            let accountNumberinput = yield inquirer_1.default.prompt({
                name: "accountNumber",
                type: "number",
                message: "Enter your account number:"
            });
            let customer = customers.find(customer => customer.account.accountNumber === accountNumberinput.accountNumber);
            if (customer) {
                console.log(`Welcome ${customer.firstName} ${customer.lastName}!\n`);
                let ans = yield inquirer_1.default.prompt([{
                        name: "select",
                        type: "list",
                        message: "Select an operation",
                        choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
                    }]);
                switch (ans.select) {
                    case "Deposit":
                        let depositAmount = yield inquirer_1.default.prompt({
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to deposit:"
                        });
                        customer.account.deposit(depositAmount.amount);
                        break;
                    case "Withdraw":
                        let withdrawAmount = yield inquirer_1.default.prompt({
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to withdraw:"
                        });
                        customer.account.withdraw(withdrawAmount.amount);
                        break;
                    case "Check Balance":
                        customer.account.checkBalance();
                        break;
                    case "Exit":
                        console.log("Exiting bank program....");
                        console.log("\n Thank you for using our services. Goodbye!");
                        return;
                }
            }
            else {
                console.log("Invalid account number. Please try again.");
            }
        } while (true);
    });
}
service();
