"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SAccount = /** @class */ (function () {
    function SAccount() {
        this.balance = 0;
        this.interestRate = 1.0;
        this.interestEarned = 0;
        this.addBalance = 0;
    }
    SAccount.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.log("no neg deposits");
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    };
    SAccount.prototype.withdraw = function (amount) {
        if (amount < 0) {
            console.log("no neggy");
            return this.balance;
        }
        if (amount > this.balance) {
            console.log("NSF");
            return this.balance;
        }
        this.balance -= amount;
        return this.balance;
    };
    SAccount.prototype.getBalance = function (amount) {
        return this.balance;
    };
    SAccount.prototype.interest = function (interestRate, termInMonths) {
        this.interestEarned = this.balance * interestRate * termInMonths;
        return this.deposit(this.interest);
    };
    return SAccount;
}());
exports.SAccount = SAccount;
