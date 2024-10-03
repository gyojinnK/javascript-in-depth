const o = {
  a: 1,
  b: 2,
  // __proto__는 [[Prototype]]을 설정합니다.
  // 여기에 다른 객체 리터럴로 지정되어 있습니다.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]]은 속성 'b'와 'c'를 가지고 있습니다.
// o.[[Prototype]].[[Prototype]] 은 Object.prototype 입니다(무엇을 의미하는지 나중에 설명하겠습니다).
// 마지막으로, o.[[Prototype]].[[Prototype]].[[Prototype]]은 null입니다.
// null은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[Prototype]]은 없습니다.
// 그러면 전체 프로토타입 체인은 다음과 같습니다.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// o에 'a' 자체 소유 속성이 있습니까? 네, 그 값은 1입니다.

console.log(o.b); // 2
// o에 'b'라는 자체 소유 속성이 있습니까? 네, 그 값은 2입니다.
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않습니다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부릅니다.

console.log(o.c); // 4
// o는 'c'라는 속성을 소유하나요? 아니요, 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 소유하나요? 네, 값은 4이다.

console.log(o.d); // undefined
// o에 'd' 자체 속성이 있습니까? 아니요, 프로토타입을 확인하세요.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]]에 'd' 자체 소유 속성이 있습니까? 아니요, 프로토타입을 확인하세요.
// o.[[Prototype]].[[Prototype]]은 Object.prototype이고,
// 기본적으로 'd' 속성이 없습니다. 프로토타입을 확인하세요.
// o.[[Prototype]].[[Prototype]].[[Prototype]]은 null, 검색을 중지합니다,
// 속성을 찾을 수 없어서, undefined를 반환합니다.
