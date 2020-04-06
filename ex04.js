//변수의 범위
//1. 자바스크립트는 블록범위 없지만 블록내에서 var 사용 여부에 영향 받는다.
//2. function{} 안에서 var를 사용하게 되면 function scope가 된다.
var i = 10;
	var f = function() {
		var i = 20;
		j = 100;
		console.log(i);
		i = j - i;
	}
	
	{
		var x = 10000; 
		// 변수일때는 let..? 상수일때는 const? var는 함수 scope가 생겨서 밖에서 사용x
		const PI = 3.14;
		x = 100;
		// 상수이기 때문에 오류 : 숫자를 바꾸면 안됨. PI = 0;
		
	}
	//접근 안됨
	//console.log(x);
	console.log(x);
	f();
	console.log(i);
	console.log(j);