var FibonacciFinder = /** @class */ (function () {
    function FibonacciFinder(interval, outputFunc) {
        var _this = this;
        this.outputFunc = outputFunc;
        this.interval = interval;
        this.secondsRemain = interval;
        this.numbers = new Map();
        this.timer = setInterval(function () { return _this.timerJob(); }, 1000);
    }
    FibonacciFinder.prototype.addNumber = function (value) {
        this.numbers.set(value, (this.numbers.get(value) || 0) + 1);
        this.outputFunc("Number " + value + " added" + (isFibonacci(value) ? " =>FIB<=" : ""));
    };
    FibonacciFinder.prototype.pauseTimer = function () {
        clearInterval(this.timer);
    };
    FibonacciFinder.prototype.resumeTimer = function () {
        var _this = this;
        this.timer = setInterval(function () { return _this.timerJob(); }, 1000);
    };
    FibonacciFinder.prototype.report = function () {
        var result = "";
        for (var _i = 0, _a = Array.from(this.numbers.entries()); _i < _a.length; _i++) {
            var number = _a[_i];
            var num = number[0], n = number[1];
            result += " " + num + ":" + n + " ";
        }
        this.outputFunc(result);
    };
    FibonacciFinder.prototype.timerJob = function () {
        --this.secondsRemain;
        if (this.secondsRemain <= 0) {
            this.report();
            this.secondsRemain = this.interval;
        }
    };
    return FibonacciFinder;
}());
export default FibonacciFinder;
function isFibonacci(value) {
    var isPerfectSquare = function (x) {
        return Math.pow(Math.trunc(Math.sqrt(x)), 2) === x;
    };
    return (isPerfectSquare(5 * value * value + 4) ||
        isPerfectSquare(5 * value * value - 4));
}
