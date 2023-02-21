"use strict";
exports.__esModule = true;
var physical_disk_1 = require("./perfomon/physical-disk");
var perfomon = /** @class */ (function () {
    function perfomon() {
        this.physicalDisk = new physical_disk_1["default"]();
    }
    return perfomon;
}());
exports["default"] = perfomon;
;
