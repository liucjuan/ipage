module.exports = function(Util){
    Util.extend({
        serialize: function (obj) {
            return JSON.stringify(obj);
        },
        dserialize: function (json) {
            return JSON.parse(json);
        }
    });
};

