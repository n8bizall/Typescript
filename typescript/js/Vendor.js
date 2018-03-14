"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vendor = /** @class */ (function () {
    function Vendor(id, name, phone, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    Vendor.prototype.printOut = function () {
        console.log("id = " + this.id + ", userName=" + this.name + ", phone=" + this.phone + ", email=" + this.email);
    };
    return Vendor;
}());
exports.Vendor = Vendor;
