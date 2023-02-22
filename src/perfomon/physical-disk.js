"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var emitter_1 = require("./emitter");
var commander_1 = require("./commander");
var physicalDisk = /** @class */ (function (_super) {
    __extends(physicalDisk, _super);
    function physicalDisk(option) {
        if (option === void 0) { option = ['-si', '2']; }
        var _this = 
        // execSync("typeperf -qx PhysicalDisk").toString('utf-8')
        _super.call(this) || this;
        _this.command = "PhysicalDisk";
        _this.commander = new commander_1["default"](_this.command, option);
        return _this;
    }
    /**
     * Current Disk Queue Length
     * ex) \PhysicalDisk(0 C:)\Current Disk Queue Length
     *
     * @param {string} [drive="_Total"]
     * @param {string} [eventName]
     * @memberof physicalDisk
     */
    physicalDisk.prototype.currentDiskQueueLength = function (drive, eventName) {
        var _this = this;
        var _a, _b;
        if (drive === void 0) { drive = "_Total"; }
        var command = 'Current Disk Queue Length';
        (_a = this.commander) === null || _a === void 0 ? void 0 : _a.start(command, {
            select: function (cli) {
                return cli.includes(drive);
            }
        });
        (_b = this.commander) === null || _b === void 0 ? void 0 : _b.on(command, function (data) {
            _super.prototype.emit.call(_this, eventName !== null && eventName !== void 0 ? eventName : command, {
                data: data.data,
                drive: drive
            });
        });
    };
    return physicalDisk;
}(emitter_1["default"]));
exports["default"] = physicalDisk;
// \PhysicalDisk(1 D:)\% Disk Time
// \PhysicalDisk(0 C:)\% Disk Time
// \PhysicalDisk(_Total)\% Disk Time
// \PhysicalDisk(1 D:)\Avg. Disk Queue Length
// \PhysicalDisk(0 C:)\Avg. Disk Queue Length
// \PhysicalDisk(_Total)\Avg. Disk Queue Length
// \PhysicalDisk(1 D:)\% Disk Read Time
// \PhysicalDisk(0 C:)\% Disk Read Time
// \PhysicalDisk(_Total)\% Disk Read Time
// \PhysicalDisk(1 D:)\Avg. Disk Read Queue Length
// \PhysicalDisk(0 C:)\Avg. Disk Read Queue Length
// \PhysicalDisk(_Total)\Avg. Disk Read Queue Length
// \PhysicalDisk(1 D:)\% Disk Write Time
// \PhysicalDisk(0 C:)\% Disk Write Time
// \PhysicalDisk(_Total)\% Disk Write Time
// \PhysicalDisk(1 D:)\Avg. Disk Write Queue Length
// \PhysicalDisk(0 C:)\Avg. Disk Write Queue Length
// \PhysicalDisk(_Total)\Avg. Disk Write Queue Length
// \PhysicalDisk(1 D:)\Avg. Disk sec/Transfer
// \PhysicalDisk(0 C:)\Avg. Disk sec/Transfer
// \PhysicalDisk(_Total)\Avg. Disk sec/Transfer
// \PhysicalDisk(1 D:)\Avg. Disk sec/Read
// \PhysicalDisk(0 C:)\Avg. Disk sec/Read
// \PhysicalDisk(_Total)\Avg. Disk sec/Read
// \PhysicalDisk(1 D:)\Avg. Disk sec/Write
// \PhysicalDisk(0 C:)\Avg. Disk sec/Write
// \PhysicalDisk(_Total)\Avg. Disk sec/Write
// \PhysicalDisk(1 D:)\Disk Transfers/sec
// \PhysicalDisk(0 C:)\Disk Transfers/sec
// \PhysicalDisk(_Total)\Disk Transfers/sec
// \PhysicalDisk(1 D:)\Disk Reads/sec
// \PhysicalDisk(0 C:)\Disk Reads/sec
// \PhysicalDisk(_Total)\Disk Reads/sec
// \PhysicalDisk(1 D:)\Disk Writes/sec
// \PhysicalDisk(0 C:)\Disk Writes/sec
// \PhysicalDisk(_Total)\Disk Writes/sec
// \PhysicalDisk(1 D:)\Disk Bytes/sec
// \PhysicalDisk(0 C:)\Disk Bytes/sec
// \PhysicalDisk(_Total)\Disk Bytes/sec
// \PhysicalDisk(1 D:)\Disk Read Bytes/sec
// \PhysicalDisk(0 C:)\Disk Read Bytes/sec
// \PhysicalDisk(_Total)\Disk Read Bytes/sec
// \PhysicalDisk(1 D:)\Disk Write Bytes/sec
// \PhysicalDisk(0 C:)\Disk Write Bytes/sec
// \PhysicalDisk(_Total)\Disk Write Bytes/sec
// \PhysicalDisk(1 D:)\Avg. Disk Bytes/Transfer
// \PhysicalDisk(0 C:)\Avg. Disk Bytes/Transfer
// \PhysicalDisk(_Total)\Avg. Disk Bytes/Transfer
// \PhysicalDisk(1 D:)\Avg. Disk Bytes/Read
// \PhysicalDisk(0 C:)\Avg. Disk Bytes/Read
// \PhysicalDisk(_Total)\Avg. Disk Bytes/Read
// \PhysicalDisk(1 D:)\Avg. Disk Bytes/Write
// \PhysicalDisk(0 C:)\Avg. Disk Bytes/Write
// \PhysicalDisk(_Total)\Avg. Disk Bytes/Write
// \PhysicalDisk(1 D:)\% Idle Time
// \PhysicalDisk(0 C:)\% Idle Time
// \PhysicalDisk(_Total)\% Idle Time
// \PhysicalDisk(1 D:)\Split IO/Sec
// \PhysicalDisk(0 C:)\Split IO/Sec
// \PhysicalDisk(_Total)\Split IO/Sec
