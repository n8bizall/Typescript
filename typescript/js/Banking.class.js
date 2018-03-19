"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_class_1 = require("./Account.class");
var Banking = /** @class */ (function () {
    function Banking() {
    }
    Banking.prototype.main = function () {
        var account = new Account_class_1.Account();
        var balance = account.deposit(100);
        if (balance != 100) {
            console.log("we have a problem");
            return;
        }
        balance = account.withdraw(25);
        if (balance != 75) {
            console.log("we have a problem");
            return;
        }
        balance = account.withdraw(100);
        if (balance != 75) {
            console.log("still a problem");
        }
        balance = account.withdraw(-100); //check for negative balance
        if (balance != 75) {
            console.log("still a problem");
        }
        balance = account.deposit(-100);
        if (balance != 75) {
            console.log("still a problem");
        }
        console.log("all good");
    };
    return Banking;
}());
exports.Banking = Banking;
var banking = new Banking();
banking.main(); //create banking class instance and call main method
