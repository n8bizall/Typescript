"use strict";
//5 instances in array print out full name. dont print password.email phone
var Users = /** @class */ (function () {
    function Users(id, userName, fname, lname, phone, email) {
        this.id = id;
        this.userName = userName;
        this.fname = fname, this.lname = lname;
        this.phone = phone;
        this.email = email;
    }
    Users.prototype.printOut = function () {
        console.log("id = " + this.id + ", userName=" + this.userName + ", name=" + (this.fname + this.lname) + ", phone=" + this.phone + ", email=" + this.email);
    };
    return Users;
}());
var arrUser = [
    new Users(1, "n8bizall", "Nate", "Bucher", 2705192, "n8bizall@yahoo.com"),
    new Users(2, "jlogin", "James", "Ducher", 55555441, "n@yahoo.com"),
    new Users(3, "dollym", "Dolly", "Cucher", 27097895192, "n8bizall@ya.com"),
    new Users(4, "janices", "Janis", "Duck", 27192, "n8bizallo.com"),
    new Users(5, "hello", "Hello", "Smith", 2708525192, "n8bizall@.com")
];
for (var _i = 0, arrUser_1 = arrUser; _i < arrUser_1.length; _i++) {
    var user = arrUser_1[_i];
    user.printOut();
}
