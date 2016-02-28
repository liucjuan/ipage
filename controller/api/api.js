var util = require("../../util");

var ApiController = function () {

};

util.extend(ApiController.prototype, {
    prime: function (req, res) {
        var range = req.query["range"],
            beginTime = new Date();
        range = parseInt(range, 10);
        if (!(range >= 2)) {
            range = 2;
        }
        var primes = prime(range),
            endTime = new Date();

        res.json({range: range, primes: primes, spend: endTime - beginTime});
    }
});
//region 质数
function prime(range) {
    var nums = [2];
    return (function () {
        for (var begin = 3, end = range; begin <= end; begin++) {
            var isPrime = true;
            for (var i = 0, len = nums.length; i < len; i++) {
                var seed = nums[i];
                if (seed > begin / 2) {
                    break
                } else {
                    if (begin % seed == 0) {
                        isPrime = false;
                    }
                }
            }
            if (isPrime) {
                nums.push(begin)
            }
        }
        return nums;
    })();
}
//endregion
module.exports = new ApiController();