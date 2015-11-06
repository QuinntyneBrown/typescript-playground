var Test = (function () {
    function Test() {
        var a = 0;
    }
    Object.defineProperty(Test.prototype, "message", {
        get: function () { return "hello"; },
        enumerable: true,
        configurable: true
    });
    return Test;
})();
