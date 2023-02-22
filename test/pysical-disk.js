"use strict";
// const perfomon = require("../src/index.js");
// console.log(perfomon.default());
exports.__esModule = true;
// const {physicalDisk} = require("../src/index");
var index_1 = require("../src/index");
var physical_disk = new index_1.physicalDisk();
physical_disk.currentDiskQueueLength("D:", "Current Disk Queue Length");
physical_disk.on("Current Disk Queue Length", function (data) {
    console.log(data);
    /*
        data
        { data: '6.000000', drive: 'D:' }
        { data: '4.000000', drive: 'D:' }
        { data: '8.000000', drive: 'D:' }
        { data: '5.000000', drive: 'D:' }
        ...
    */
});
