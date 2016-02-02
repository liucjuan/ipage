var express = require("express"),
    util = require("./util"),
    Config = require("./config"),
    Routes = require("./routes")
    ;

var app = express();

var Application = function () {
    this.app = app;
    this.init();
};

util.extend(Application.prototype, {
    init: function () {
        this.handler();
    },
    handler: function () {
        new Config(this.app);
        new Routes(this.app);
    },
    start: function () {
        var port = this.app.get("port"),
            ip = this.app.get("ip");

        this.app.listen(port);
        console.log("working, " + ip + ":" + port);
    }
});

module.exports = Application;

