// 1)
// JavaScript의 일부 리터럴 구문은 암시적으로 [[Prototype]]을 설정하는 인스턴스를 생성합니다. 예를 들어,
// 객체 리터럴 (`__proto__` 키 없음)은 자동으로 `[[Prototype]]`으로 `Object.prototype`을 갖습니다.
const obj = { a: 1 };
console.log(Object.getPrototypeOf(obj));

// 배열 리터럴은 자동으로 `Array.prototype`을 `[[Prototype]]`으로 갖습니다.
const array = [1, 2, 3];
console.log(Object.getPrototypeOf(array), "|", Array.prototype);

// RegExp 리터럴은 자동으로 `RegExp.prototype`을 `[[Prototype]]`으로 갖습니다.
const regExp = /i love JS/i;
console.log(Object.getPrototypeOf(regExp), "|", RegExp.prototype);

console.log("--------------------");

// 2)
// 생성자 형태를 통해, "문법 설탕을 제거"할 수 있습니다.
const arr = new Array([1, 2, 3]);
const regexp = new RegExp("l love JS");

// 예를 들어, map()과 같은 "배열 메서드"는 단순히 Array.prototype에 정의된 메서드입니다. 모든 배열 인스턴스에서 자동으로 사용할 수 있습니다.

// 3)
// 흥미롭게도, 일부 내장 생성자의 prototype 속성은 역사적인 이유로 해당 인스턴스 자체입니다.
// 예를 들어, Number.prototype은 숫자 0이고,
// Array.prototype은 빈 배열이고,
// RegExp.prototype은 /(?:)/입니다.
console.log(Number.prototype + 1);
console.log(Array.prototype.map((x) => x + 1));
console.log(String.prototype + "a");
console.log(RegExp.prototype.source);
console.log(Function.prototype());
// Function.prototype은 자체로 프로그램에 아무 작업도 수행하지 말라고 지시하는 (no-operation, no-op) 함수입니다.

// 그러나, 이것은 사용자 정의 생성자나 Map과 같은 최신 생성자의 경우에는 해당되지 않습니다.
// console.log(Map.prototype.get(1));
// Uncaught TypeError: 호환되지 않는 Map.prototype에서 호출된 get 메서드

console.log("--------------------");
