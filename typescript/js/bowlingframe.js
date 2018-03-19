"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Frame = /** @class */ (function () {
    function Frame(frame) {
        this.score = Math.floor(Math.random() * 11);
        this.frame = frame;
    }
    return Frame;
}());
exports.Frame = Frame;
