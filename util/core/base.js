var _ = require("underscore"),
    sysUtil = require("util");

var Util = function () {
    this.version = "1.0.1";
};

Util.fn = Util.prototype;

/**
 * 对对象进行扩展
 * @param obj
 * @returns {*} 扩展后的原来对象
 */
Util.extend = function (obj) {
    var length = arguments.length;
    if (length < 1 || obj == null) return null;
    return _.extend(this.fn, obj);
};
_.extend(Util.fn, sysUtil);
_.extend(Util.fn, _);

module.exports = Util;