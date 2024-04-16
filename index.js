#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000;
let myPin = 2008;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin code successfully matched!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Balance Inquiry", "Fast Cash", "Deposit", "Bill payment"]
        }
    ]);
    console.log(operationAnswer.operation);
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter your amount",
                type: "input"
            }
        ]);
        console.log(amountAnswer.amount);
        myBalance -= amountAnswer.amount;
        console.log(`"Your remaining balance is:" ${myBalance}`);
    }
    else if (operationAnswer.operation === "Balance Inquiry") {
        console.log(`"Your current balance is:" ${myBalance}`);
    }
    else if (operationAnswer.operation === "Fast Cash") {
        let FastCashAnswer = await inquirer.prompt([
            {
                name: "cash",
                message: "Select the amount you want to take as Fast Cash",
                type: "list",
                choices: [1000, 5000, 10000, 20000]
            }
        ]);
        console.log(FastCashAnswer.cash);
        myBalance -= FastCashAnswer.cash;
        console.log(`"Your remaining balance is:" ${myBalance}`);
    }
    else if (operationAnswer.operation === "Deposit") {
        let DepositAmount = await inquirer.prompt([
            {
                name: "deposit",
                message: "Enter the amount you want to deposit",
                type: "number"
            }
        ]);
        console.log(DepositAmount.deposit);
        myBalance += DepositAmount.deposit;
        console.log(`"Your current balance now is:" ${myBalance}`);
    }
    else if (operationAnswer.operation === "Bill payment") {
        let BillPayment = await inquirer.prompt([
            {
                name: "utilitybill",
                message: "select the bill you want to pay for",
                type: "list",
                choices: ["Electric Bill", "Water Bill", "SUiGas Bill", "Telephone Bill"],
            }
        ]);
        console.log(BillPayment.utilitybill);
        if (BillPayment.utilitybill === "Electric Bill") {
            let ElectricBillPayment = await inquirer.prompt([
                {
                    name: "amount",
                    message: "please enter your bill amount",
                    type: "input"
                }
            ]);
            console.log(ElectricBillPayment.amount);
            myBalance -= ElectricBillPayment.amount;
            console.log(`"Your remaining balance is:" ${myBalance}`);
        }
        else {
            let otherBills = await inquirer.prompt([
                {
                    name: "amount",
                    message: "please enter your bill amount",
                    type: "input"
                }
            ]);
            console.log(otherBills.amount);
            myBalance -= otherBills.amount;
            console.log(`"Your remaining balance is:" ${myBalance}`);
        }
    }
}
else {
    console.log(`"Sorry! Incorrect pin code, please try again"`);
}
