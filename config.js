var util = require("./util"),
    express = require("express"),
    nunjucks = require("nunjucks"),
    logger = require("morgan");

"use strict";

function Config(app) {
    this.app = app;
    this.init();
};

util.extend(Config.prototype, {
    init: function () {
        this.expressConfig();
        this.nunjucksConfig();
    },
    expressConfig: function () {
        var app = this.app;
        app.set('views', './views');
        app.set("view engine", "html");
        app.set("ip", process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
        app.set("port", process.env.OPENSHIFT_NODEJS_PORT || 3000);

        app.use("/~", express.static(__dirname + '/public'));
        app.use(logger("dev"));
        app.use(function (req, res, next) {
            util.extend(app.locals, {
                ContextRoot: "/",
                //JsPath: "/~/js/",
                JsPath:"http://dy66.file.alimmdn.com/script/ipage/",
                //CssPath: "/~/css/"
                CssPath:"http://dy66.file.alimmdn.com/style/",
            });
            next();
        });

    },
    nunjucksConfig: function () {
        nunjucks.configure('views', {
            autoescape: true,
            express: this.app,
            tags: {
                blockStart: '<%',
                blockEnd: '%>',
                variableStart: '<$',
                variableEnd: '$>',
                commentStart: '<#',
                commentEnd: '#>'
            }
        });

    }
});

module.exports = Config;


