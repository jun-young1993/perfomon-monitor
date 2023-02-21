"use strict";
exports.__esModule = true;
var event_kit_1 = require("event-kit");
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.emitter = new event_kit_1.Emitter();
    }
    Emitter.prototype.emit = function (eventName, data) {
        this.emitter.emit(eventName, data);
    };
    Emitter.prototype.on = function (eventName, fn) {
        return this.emitter.on(eventName, fn);
    };
    return Emitter;
}());
exports["default"] = Emitter;
