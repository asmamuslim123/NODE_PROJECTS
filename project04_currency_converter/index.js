#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        message: "Select your currency: "
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        message: "Select your convertion currency: "
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your convertion amount: "
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let BaseAmount = amount / fromAmount; //USD base currency //4
let ConvertedAmount = BaseAmount * toAmount;
console.log(ConvertedAmount);
