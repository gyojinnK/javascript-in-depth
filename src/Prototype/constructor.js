// 모든 인스턴스가 동일한 몇가지 동일한 속성을 공유하는 경우, 프로토타입의 강점이 드러납니다.
// 이는 특히 메서드를 공유할 경우 더욱 두드러집니다.
// 예로, getValue 함수를 통해 접근할 수 있는 값을 포함하는 '상자' 객체를 여럿 만드는 경우를 생각해봅시다.
// 단순한 구현은 다음과 같습니다.
const boxesBasic = [
  {
    value: 1,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
];

// 각 인스턴스에는 중복되고 불필요한 작업을 수행하는 고유한 함수 속성이 있기 때문에, 기대에 미치지 못하는 코드가 됩니다.
// 대신에, getValue를 모든 상자의 [[Prototype]]으로 이동할 수 있습니다.

const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];

console.log(boxes[0].getValue());
console.log("--------------------");

// 이렇게 하면, 모든 상자의 getValue 메서드가 동일한 함수를 참조하므로, 메모리의 사용량이 줄어듭니다.
// 그러나 모든 객체 생성에 대해 __proto__를 수동으로 바인딩하는 것은 여전히 매우 불편합니다.
// 이것은 생성된 모든 객체에 대해 [[Prototype]]을 자동으로 설정하는 constructor 함수를 사용하는 경우입니다.
// 생성자는 new로 호출되는 함수입니다.

// 생성자 함수
function Box(value) {
  this.value = value;
}

// Box.prototype.
Box.prototype.getValue = function () {
  return this.value;
};

const boxesToConstructor = [new Box(1), new Box(2), new Box(3)];
console.log(boxesToConstructor[2].getValue());
console.log(Object.getPrototypeOf(new Box()) === Box.prototype);
console.log(Box.prototype.constructor === Box);
console.log("--------------------");

// new Box(1)이 Box 생성자 함수에서 생성된 "인스턴스"라고 말할 수 있는데, Box.prototype은 이전에 생성한 boxPrototype 객체와 크게 다르지 않습니다.
// Box.prototype은 그냥 일반 객체입니다. 생성자 함수에서 생성된 모든 인스턴스는 자동으로 생성자의 prototype 속성을 [[Prototype]]으로 갖게 됩니다.
// 즉, Object.getPrototypeOf(new Box()) === Box.prototype입니다.
// 기본적으로 Constructor.prototype에는 생성자 함수 자체를 참조하는 constructor 속성이 하나 있습니다.
// 즉, Box.prototype.constructor === Box이기 때문에, 모든 인스턴스에서 원래 생성자에 접근할 수 있게 됩니다.

class BoxToClass {
  constructor(value) {
    this.value = value;
  }

  // 메서드는 Box.prototype에 생성됩니다.
  getValue() {
    return this.value;
  }
}

// 클래스는 생성자 함수보다 문법적인 설탕입니다.
// 즉, 여전히 Box.prototype을 조작하여 모든 인스턴스의 동작을 변경할 수 있습니다.
// 그러나 클래스는 기본 프로토타입 메커니즘에 대한 추상화로 설계되었기 때문에,
// 이 자습서에서는 더 가벼운 생성자 함수 구문을 사용하여 프로토타입이 작동하는 방식을 보겠습니다.

// Box.prototype은 모든 인스턴스의 [[Prototype]]과 동일한 객체를 참조하기 때문에,
// Box.prototype을 변경하여 모든 인스턴스의 동작을 변경할 수 있습니다.

function BoxToPrototype(value) {
  this.value = value;
}

BoxToPrototype.prototype.getValue = function () {
  return this.value;
};

const boxObj = new BoxToPrototype(2);
console.log(boxObj.getValue());

BoxToPrototype.prototype.getValue = function () {
  return this.value + 3;
};

console.log(boxObj.getValue());

// 결과적으로, 재할당 (Constructor.prototype (Constructor.prototype = ...))은 두 가지 이유로 나쁜 생각입니다.
// - 재할당 전에 생성된 인스턴스의 [[Prototype]]은 이제 재할당 후 생성된 인스턴스의 [[Prototype]]과 다른 객체를 참조합니다.
//   하나의 [[Prototype]]을 변경해도 더 이상 다른 객체가 변경되지 않습니다.
// - constructor 속성을 수동으로 재설정하지 않는 한, instance.constructor에서 더 이상 생성자 함수를 추적할 수 없어 동작 방식을 예상하기 어려워집니다.
//   일부 기본 제공 연산은 constructor 속성도 읽으며 설정되지 않은 경우, 예상대로 작동하지 않을 수 있습니다.
