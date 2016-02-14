var _ = require("underscore"),
    sysUtil = require("util");

var Util = function () {
    this.version = "1.0.1";
};

Util.fn = Util.prototype;

Util.extend = function (obj) {//Util 扩展
    var length = arguments.length;
    if (length < 1 || obj == null) return null;
    return _.extend(this.fn, obj);
};
_.extend(Util.fn, sysUtil);
_.extend(Util.fn, _);

module.exports = Util;