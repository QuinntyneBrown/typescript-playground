var Test = (function () {
    function Test() {
        var a = 5;
    }
    Object.defineProperty(Test.prototype, "backTick", {
        get: function () {
            return "multi\n                line\n                back\n                tick";
        },
        enumerable: true,
        configurable: true
    });
    return Test;
})();
//# sourceMappingURL=app.js.map