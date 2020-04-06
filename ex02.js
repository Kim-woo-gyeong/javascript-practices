/* object 타입 : new 생성자 함수를 사용해서 object 타입 객체를 생성 
 *  Number() ->object type 객체생성
 	Boolean()->object
 	String() ->object
	Object(), Array() -> object
 	Function()->function type 객체생성
 	
 	자바 스크립트를 구분하는 또 다른 방법
 	1. 내장(Built-in, Native) 객체 (자바스크립트 엔진안에 미리 정의되어 있는 객체)
 	ex) Number() ... parseInt(), setTimeOut, setInterval, window객체...
	2. 호스트 객체
	자바스크립트가 접근하는 브라우저의 객체들.
	document, location....
 	3. 사용자 객체
 	자바스크립트 코드가 엔진에 의해 실행되면서 생성되는 객체들
 */

var i = 10;
var f = 3.14;
var b = true;
var s = 'Hello World';
var u;

var fn = function(a, b){ return a + b; };
//자바스크립트에서는 배열이랑 객체 차이 거의 x
var o = {};
var a = [];

console.log(i + " : " + typeof(i));
console.log(f + " : " + typeof(f));
console.log(b + " : " + typeof(b));
console.log(s + " : " + typeof(s));
console.log(u + " : " + typeof(u));
console.log(fn + " : " + typeof(fn));
console.log(o + " : " + typeof(o));
console.log(a + " : " + typeof(a));

console.log("===========================");
var i2 = new Number(10);
var b2 = new Boolean(false);
var s2 = new String('Hello World'); 

var fn2 = new Function("a", "b", "return a+b;");
var o2 = new Object();
var a2 = new Array();

console.log(i2 + " : " + typeof(i2));
console.log(b2 + " : " + typeof(b2));
console.log(s2 + " : " + typeof(s2));
console.log(fn2 + " : " + typeof(fn2));
console.log(o2 + " : " + typeof(o2));
console.log(a2 + " : " + typeof(a2));
//원시타입과 원시타입을 wrapper 객체는 별 구분없이 연산 가능.
console.log(i + i2);
console.log(s + s2);

console.log(b.valueOf()); 
//new Boolean(b).valueOf(); 객체 생성 후 사라짐!
//원시타입에 메소드가 호출 될 때 임시객체가 만들어 진다.
console.log(b2.valueOf());
console.log(Number())

/* 	Number 자체가 함수
 var MyNumber = function(value){
    this.value = value;
};
var o = new MyNumber(10);
console.log(o.value,typeof(o));

정리 : number, string, boolean,undefined -> primitive type(진짜 값! 원시타입)
     function, object -> object type
*/ 