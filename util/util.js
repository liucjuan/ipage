var Util = require("./core/base.js");

var util = new Util();

require("./core/serialize.js")(Util);

util.extend(Util.fn, {
    test: "working well!"
});
module.exports = util;