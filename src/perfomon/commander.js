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
var child_process_1 = require("child_process");
var emitter_1 = require("./emitter");
var Commander = /** @class */ (function (_super) {
    __extends(Commander, _super);
    function Commander(command, option) {
        if (option === void 0) { option = []; }
        var _this = _super.call(this) || this;
        _this.commands = [];
        _this.option = [];
        _this.command = command;
        _this.option = option;
        return _this;
    }
    Commander.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.command) {
                var command = _this.command;
                var process_1 = (0, child_process_1.spawn)("typeperf", ["-qx", command]);
                var commands_1 = '';
                // process.stdin.end();
                process_1.stdout.on('data', function (data) {
                    commands_1 += data.toString('utf8');
                });
                process_1.stdout.on('err', function (err) {
                    console.log('err', err);
                });
                process_1.on('close', function (code) {
                    _this.commands = commands_1.split("\r\n");
                    _this.commands.push("end");
                    resolve(_this.commands);
                });
            }
        });
    };
    Commander.prototype.find = function (promise, command) {
        var _this = this;
        if (command === undefined) {
            return promise;
        }
        return new Promise(function (resolve) {
            promise.then(function (commands) {
                resolve(commands.filter(function (commandstr) {
                    var _a;
                    return commandstr.includes(command, (_a = _this.command) === null || _a === void 0 ? void 0 : _a.length);
                }));
            });
        });
    };
    Commander.prototype.get = function (command) {
        if (this.commands.length === 0) {
            return this.find(this.init(), command);
        }
        else {
            return this.find(Promise.resolve(this.commands), command);
        }
    };
    Commander.prototype.run = function (cli, command) {
        var _this = this;
        var process = (0, child_process_1.spawn)("typeperf", cli.concat(this.option));
        // process.stdin.end();
        process.stdout.on('data', function (data) {
            var _a;
            var output = data.toString('utf8');
            var outputparts = output.split(',');
            if (outputparts.length == 2) {
                var value = outputparts[1];
                if (value[0] === "\"") {
                    value = value.substring(1);
                }
                if (value[value.length - 1] === "\"") {
                    value = value.substring(0, value.length - 1);
                }
                if (!value.includes((_a = _this.command) !== null && _a !== void 0 ? _a : "")) {
                    _super.prototype.emit.call(_this, command, {
                        data: value,
                        cli: cli,
                        option: _this.option,
                        original: output
                    });
                }
            }
        });
        process.stdout.on('err', function (err) {
        });
        process.on('close', function (code) {
        });
    };
    /**
     *
     *
     * @param {string} command
     * @memberof Commander
     */
    Commander.prototype.start = function (command, options) {
        var _this = this;
        this.get(command).then(function (commands) {
            commands.forEach(function (cli) {
                if ((options === null || options === void 0 ? void 0 : options.ignore) && options.ignore(cli)) {
                    return false;
                }
                if ((options === null || options === void 0 ? void 0 : options.select) && !options.select(cli)) {
                    return false;
                }
                _this.run([cli], command);
            });
        });
    };
    Commander.prototype.on = function (command, fn) {
        return _super.prototype.on.call(this, command, fn);
    };
    return Commander;
}(emitter_1["default"]));
exports["default"] = Commander;
