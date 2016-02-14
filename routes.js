var util = require("./util"),
    controller = require("./controller"),
    adminController = controller.admin,
    homeController = controller.home,
    apiController = controller.api;

var Routes = function (app) {
    this.app = app;
    this.init();
};

util.extend(Routes.prototype, {

    //region 路由初始化
    init: function () {
        this.adminPage();
        this.adminJson();
        this.indexPage();
        this.indexJson();
        this.apiJson();
    },
    //endregion

    //region admin 相关路由
    adminPage: function () {
        this.app.get("/admin", adminController.index);

    },
    adminJson: function () {
        this.app.get("/admin/json", function (req, res) {
            res.contentType = "application/json";
            res.send(util.serialize({"say": "I am admin json!"}))
        });
        this.app.get("/admin/json/markdown", function (req, res) {
            adminController.markdown(req, res);
        });
    },
    //endregion

    //region 首页相关路由
    indexPage: function () {
        this.app.get("/welcome", function (req, res) {
            res.send("Welcome!");
        });
        this.app.get("/", function (req, res) {
            homeController.index(req, res);
        });
    },
    indexJson: function () {
        this.app.get("/json", function (req, res) {
            res.set({
                "Content-Type": "application/json"
            });
            res.cookie("say", {"King": "Hello", "God": "Shit", "Date": new Date()});
            res.send(util.serialize({"say": "Hello"}))
        });
        this.app.get("/json/date", function (req, res) {
            res.contentType = "application/json";
            res.send(new Date());
        });
    },
    //endregion

    //region api路由
    apiJson: function () {
        this.app.get("/api", function (req, res) {
            res.send("这是一个测试");
        });
        this.app.get("/api/prime", function (req, res) {
            apiController.prime(req, res);
        });
    }
    //endregion

});

module.exports = Routes;
