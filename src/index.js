"use strict";
exports.__esModule = true;
exports.perfomon = exports.physicalDisk = void 0;
var physical_disk_1 = require("./perfomon/physical-disk");
exports.physicalDisk = physical_disk_1["default"];
var perfomon = /** @class */ (function () {
    function perfomon() {
        this.physicalDisk = new physical_disk_1["default"]();
    }
    return perfomon;
}());
exports.perfomon = perfomon;
;
