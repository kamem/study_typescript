var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Parent = (function () {
    function Parent(name) {
        this.name = name;
    }
    Parent.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Parent;
})();

var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.move = function () {
        console.log("slithering...");
        _super.prototype.move.call(this, 5);
    };
    return Child;
})(Parent);
