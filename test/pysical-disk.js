"use strict";
// const perfomon = require("../src/index.js");
// console.log(perfomon.default());
exports.__esModule = true;
// const {physicalDisk} = require("../src/index");
var index_1 = require("../src/index");
var physical_disk = new index_1.physicalDisk();
disk1();
// disk2();
// disk3();
function disk1() {
    var counterName = "Current Disk Queue Length";
    var diskName = "D:";
    physical_disk.currentDiskQueueLength(diskName, counterName);
    physical_disk.on(counterName, function (data) {
        console.log(counterName, data);
        /*
            data
            { data: '6.000000', drive: 'D:' }
            { data: '4.000000', drive: 'D:' }
            { data: '8.000000', drive: 'D:' }
            { data: '5.000000', drive: 'D:' }
            ...
        */
    });
    setTimeout(function () {
        /**
         *
         *
         * @param {string} counterName
         * @returns {Boolean}
         * @memberof physicalDisk
         */
        physical_disk.kill(counterName);
    }, 100000);
}
function disk2() {
    var counterName = 'Avg. Disk Write Queue Length';
    var diskName = "D:";
    physical_disk.AvgDiskWriteQueueLength(diskName, counterName);
    physical_disk.on(counterName, function (data) {
        console.log(counterName, data);
        /*
            data
            { data: '6.000000', drive: 'D:' }
            { data: '4.000000', drive: 'D:' }
            { data: '8.000000', drive: 'D:' }
            { data: '5.000000', drive: 'D:' }
            ...
        */
    });
    setTimeout(function () {
        /**
         *
         *
         * @param {string} counterName
         * @returns {Boolean}
         * @memberof physicalDisk
         */
        physical_disk.kill(counterName);
    }, 10000);
}
function disk3() {
    var counterName = 'Avg. Disk Read Queue Length';
    var diskName = "D:";
    physical_disk.AvgDiskWriteQueueLength(diskName, counterName);
    physical_disk.on(counterName, function (data) {
        console.log(counterName, data);
        /*
            data
            { data: '6.000000', drive: 'D:' }
            { data: '4.000000', drive: 'D:' }
            { data: '8.000000', drive: 'D:' }
            { data: '5.000000', drive: 'D:' }
            ...
        */
    });
    setTimeout(function () {
        /**
         *
         *
         * @param {string} counterName
         * @returns {Boolean}
         * @memberof physicalDisk
         */
        physical_disk.kill(counterName);
    }, 10000);
}
