var o = {
	name:"둘리",
	age:10,
	isFemale:false
};

var f = function(){
	console.log("hello world");
}

var i = 10; 
var n = new Number(10);

f(); // window.을 생략하고 전역인척. 객체의 속성을 호출!!
/*
 * f 라는 이름으로 객체 생성.
 */
console.log(o);

console.log("=======================");

o.another = {
		name:'마이콜',
		age:30
}

console.log(o);
f.another ={
		name:'또치',
		age:10,
		info: function(){
			console.log(this.name + ":" + this.age);
		}
}
console.log(f.another);
f.another.info();

console.log("=======기본타입은 확장 X============");
i.another={};
console.log(i.another);