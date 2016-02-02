var util = require("../../util");

var HomeController = function () {

};

util.extend(HomeController.prototype, {

    index: function (req, res) {
        res.render('home/index', {title: "home"}, function (err, html) {
            console.error(err);
            res.send(html);
        });
    }
});

module.exports = new HomeController();