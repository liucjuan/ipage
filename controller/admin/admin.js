var util = require("../../util");

var AdminController = function () {

};

util.extend(AdminController.prototype, {
    index: function (req, res) {
        res.render('admin/index', function (err, html) {
            console.error(err);
            res.send(html);
        });
    }
});

module.exports = new AdminController();