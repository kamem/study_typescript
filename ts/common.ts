var x:number = 10;

// any type
var x3:string,
	str:string = "hello",
	obj = null; 
	
	
//関数を定義。 function 関数名(引数名:型...):戻り値
function add(x:number, y:number):number {
    return x + y;
}

add(1,1);

interface Point {
 x:number;
 y:number;
}
 
function f(point:Point) {
  console.log(point.x);
  console.log(point.y);
}
 
var o1 = {x:1,y:2};
var o2:Point = {x:1,y:2};
var o3 = <Point>{x:1,y:2};
f(o1);
f(o2);
f(o3);


interface Point2 {
 x:number;
 y?:number;
}
 
//引数をPoint型でなく、下記のように書くことも可能
function f2(point:{x:number;y?:number;}) {
}


module Util {
    var s = "hello";
    export function f() {
        return s;
    }
}
// console.log(M.s);　←変数sはexportがついていないので参照できない
console.log(Util.f());

import u = Util;
console.log(u.f);