const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log("parent: ", parent.method());
// 이 경우 parent.method를 호출할 때, 'this'는 부모를 가리킵니다.

// 자식은 부모로부터 상속받는 객체입니다.
const child = {
  __proto__: parent,
};

console.log("child: ", child.method());
// child.method가 호출되면, 'this'는 자식을 가리킵니다.
// 자식이 부모의 메서드를 상속받을 때,
// 자식에서 'value' 속성을 찾습니다. 그러나 자식은 'value'라는 자체 속성이 없기 때문에,
// 해당 속성은 [[Prototype]]에서 찾을 수 있으며, 이는 parent.value입니다.

child.value = 4; // 자식의 속성 'value'에 값 4를 할당합니다.
// 이 코드는 부모의 'value' 속성을 숨깁니다.
// 자식 객체는 이제 다음과 같습니다.
// { value: 4, __proto__: { value: 2, method: [Function] } }

console.log("child: ", child.method());
// 자식은 이제 'value' 속성을 가지므로 'this.value'는 child.value를 의미합니다.
