"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SAccount_clas_1 = require("./SAccount.clas");
var SBanking = /** @class */ (function () {
    function SBanking() {
    }
    SBanking.prototype.main = function () {
        var saccount = new SAccount_clas_1.SAccount();
        var balance = saccount.deposit(100);
        if (balance != 100) {
            console.log("we have a problem");
            return;
        }
        balance = saccount.withdraw(25);
        if (balance != 75) {
            console.log("we have a problem");
            return;
        }
        balance = saccount.withdraw(100);
        if (balance != 75) {
            console.log("still a problem");
        }
        balance = saccount.withdraw(-100); //check for negative balance
        if (balance != 75) {
            console.log("still a problem");
        }
        balance = saccount.deposit(-100);
        if (balance != 75) {
            console.log("still a problem");
        }
        balance = saccount.interest(1.0, 5);
        {
            console.log("interest earned $");
        }
        console.log("all good");
    };
    return SBanking;
}());
exports.SBanking = SBanking;
var sbanking = new SBanking();
sbanking.main(); //create banking class instance and call main method
