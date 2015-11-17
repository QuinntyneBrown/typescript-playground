var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Test = (function () {
    function Test() {
        var a = 0;
    }
    Test.prototype.getAnswer = function () {
        return 42;
    };
    Object.defineProperty(Test.prototype, "message", {
        get: function () { return "hello"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "getAnswer",
        __decorate([
            nonenumerable, 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], Test.prototype, "getAnswer", Object.getOwnPropertyDescriptor(Test.prototype, "getAnswer")));
    return Test;
})();
function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}
