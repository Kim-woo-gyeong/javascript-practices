//타입 비교
var myVar1;
var myVar2 = null;

console.log(myVar1 + ":" + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));
console.log("=======================================");

console.log(myVar1 == myVar2); //값비교. 형변환 일어남.
console.log('abc'== new String('abc'));

console.log( true + 10 );
console.log( 'abc' + new String('abc') );

console.log("=======================================");
// === : 객체의 동일성, 형변환x
console.log(myVar1 === myVar2); //타입 비교

var str = "5";
console.log(parseInt(str) == 5);