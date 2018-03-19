"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0;
    }
    Account.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.log("no neg deposits");
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    };
    Account.prototype.withdraw = function (amount) {
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
    Account.prototype.getBalance = function (amount) {
        return this.balance;
    };
    return Account;
}());
exports.Account = Account;
