var util = require("../../util"),
    markdown = require('markdown-js');

var AdminController = function () {

};

//#region 视图
util.extend(AdminController.prototype, {
    index: function (req, res) {
        res.render('admin/index', function (err, html) {
            console.error(err);
            res.send(html);
        });
    }
});
//#endregion

//#region json
util.extend(AdminController.prototype, {
    markdown: function(req, res){
        var resoutce = res.body;

        var html = markdown.makeHtml("[Click](http://ipage.wx.jaeapp.com)");
        res.json({result:true,html:html});
    }
})
//#endregion

module.exports = new AdminController();