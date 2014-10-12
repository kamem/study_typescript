/// <reference path="jquery.d.ts" />
var x = 10;

// any type
var x3, str = "hello", obj = null;

var test = $('.test');

//関数を定義。 function 関数名(引数名:型...):戻り値
function add(x, y) {
    return x + y;
}

add(1, 1);

function f(point) {
    console.log(point.x);
    console.log(point.y);
}

var o1 = { x: 1, y: 2 };
var o2 = { x: 1, y: 2 };
var o3 = { x: 1, y: 2 };
f(o1);
f(o2);
f(o3);

//引数をPoint型でなく、下記のように書くことも可能
function f2(point) {
}

var Util;
(function (Util) {
    var s = "hello";
    function f() {
        return s;
    }
    Util.f = f;
})(Util || (Util = {}));

// console.log(M.s);　←変数sはexportがついていないので参照できない
console.log(Util.f());

var u = Util;
console.log(u.f);
