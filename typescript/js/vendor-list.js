"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vendor_1 = require("./Vendor");
var arrVendor = [
    new Vendor_1.Vendor(1, "Nate", "2705192", "n8bizall@yahoo.com"),
    new Vendor_1.Vendor(2, "James", "2705192", "n@yahoo.com"),
    new Vendor_1.Vendor(3, "Dolly", "27097895192", "n8bizall@ya.com"),
    new Vendor_1.Vendor(4, "Janis", "27192", "n8bizallo.com"),
    new Vendor_1.Vendor(5, "Hello", "2708525192", "n8bizall@.com")
];
for (var _i = 0, arrVendor_1 = arrVendor; _i < arrVendor_1.length; _i++) {
    var vendor = arrVendor_1[_i];
    vendor.printOut();
}
