/* 원시타입 var -숫자형 문자형 불린형 심볼형 bull undefined 
    참조타입 객체 -메모리 주소를 변수에 할당하여 값을 참조한다. {} 안에 키 :값 으로 이루어진 속성
    키를 통해 값에 접근이 가능해짐 */

var x = 5; // 숫자형(Number)
var y = 'five'; // 문자형(String)
var isTrue = true; // 불린형(Boolean)
var empty = null; // null
var nothing // undefined
var sym = Symbol('me'); // Symbol

var item = {
	price: 5000,
	count: 10
}; // 객체(Object)
var fruits = ['apple', 'orange', 'kiwi']; // 배열(Array)
var addFruit = function (fruit) {
	fruits.push(fruit);
} // 함수(function)
addFruit('watermelon');
console.log(fruits);