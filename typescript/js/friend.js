"use strict";
var Friends = /** @class */ (function () {
    function Friends(name, email, years) {
        this.name = name,
            this.email = email,
            this.years = years;
    }
    Friends.prototype.printOut = function () {
        console.log('name=${name}, email=${email}, years=${years}`););
    };
    return Friends;
}());
