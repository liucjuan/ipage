var util = require("./util"),
    controller = require("./controller"),
    adminController = controller.admin,
    homeController = controller.home;

var Routes = function (app) {
    this.app = app;
    this.init();
};

util.extend(Routes.prototype, {
    init: function () {
        this.adminPage();
        this.adminJson();
        this.indexPage();
        this.indexJson();
    },
    adminPage: function () {
        this.app.get("/admin", adminController.index);

    },
    adminJson: function () {
        this.app.get("/admin/json", function (req, res) {
            res.contentType = "application/json";
            res.send(util.serialize({"say": "I am admin json!"}))
        });
        this.app.get("/admin/json/markdown",function(req,res){
            adminController.markdown(req, res);
        });
    },
    indexPage: function () {
        this.app.get("/welcome", function (req, res) {
            res.send("Welcome!");
        });
        this.app.get("/", function(req, res){
            homeController.index(req, res);
        });
    },
    indexJson: function () {
        this.app.get("/json", function (req, res) {
            res.set({
                "Content-Type": "application/json"
            });
            res.cookie("say",{"King":"Hello","God":"Shit","Date":new Date()});
            res.send(util.serialize({"say": "Hello"}))
        });
        this.app.get("/json/date", function (req, res) {
            res.contentType = "application/json";
            res.send(new Date());
        });
    }

});

module.exports = Routes;
