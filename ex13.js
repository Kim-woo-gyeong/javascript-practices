//배열 (Array)

//1. 생성자 함수
var a1 = new Array(); 
var a2 = new Array(10); 
// 배열을 정의할 때 동적으로 늘어나기 때문에 크기는 의미가 없다.
console.log(a2.length);
a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;

console.log(a2[1], a2[2]);
console.log(a2.length);

// Array VS Object
a = [];
a["0"] = 0;
a["1"] = 1;
a["name"] = '모징?';

console.log(a["0"],a["1"],a["name"],a.length);

for(property in a) {
    console.log("prop:" + property + ":" + typeof(property));
}

console.log("=============================================");

o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = '머지?';
console.log(o["0"] ,o["1"],o["name"],o.length);

for(property in a) {
    console.log("prop:" + property + ":" + typeof(property));
}

console.log("====================리터럴======================");
var a2 = [];
console.log(typeof(a2), a2.length);

//객체가 들어 갈 수 있다.!
var a3 = [function(){
        console.log("hello")
    }, 
    20, 
    "javascript", 
    true, 
    {
        email : 'kickscar', 
        name:'안대혁'
    },
    null];
console.log(a3.length);
for(var i = 0; i < a3.length; i++){
    console.log(a3[i])
}
console.log("===========================================================");
for(property in a3){
    console.log(typeof(property));
}


