define(["require", "exports"], function (require, exports) {
    var Test = (function () {
        function Test() {
        }
        Object.defineProperty(Test.prototype, "backTick", {
            get: function () { return "something"; },
            enumerable: true,
            configurable: true
        });
        return Test;
    })();
    exports.Test = Test;
});
//# sourceMappingURL=app.js.map