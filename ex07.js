//생성자 함수로 다수의 객체를 생성하기.

//일반함수(관례소문자로 시작)
var myFunction = function() {
	console.log('일반함수');
}

//생성자 함수(관례 대문자로 시작)
var MyObject = function(name, age){
	this.name = name;
	this.age = age;
}

//빈 객체가 만들어지고 생성자 함수가 만들어짐. 그리고 this가 빈객체가 된다..?
//콜러(객체 부르기)라는 애가 있는데 그것이 객체가 됨.
var o4 = new MyObject('둘리', 10);
var o5 = new MyObject('마이콜', 30);
console.log(o4);
console.log(o5);