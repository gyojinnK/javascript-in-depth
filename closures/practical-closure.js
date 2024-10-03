// 클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연결시켜주기 때문에 유용합니다.
// 이것은 객체가 어떤 데이터와(그 객체의 속성) 하나 혹은 그 이상의 메소드들을 연관시킨다는 점에서 객체지향 프로그래밍과 분명히 같은 맥락에 있습니다.
// 결론적으로, 오직 하나의 메소드를 가지고 있는 객체를 일반적으로 사용하는 모든 곳에 클로저를 사용할 수 있습니다.

// classes 이전의 JavaScript에는 비공개 메서드를 선언하는 기본 방법이 없었지만, 클로저를 사용하여 비공개 메서드를 흉내낼 수 있다는 것이 가능했습니다.
// 비공개 메서드는 코드에 대한 접근을 제한하는 데만 유용한 것이 아닙니다. 또한 전역 이름 공간을 관리하는 강력한 방법을 제공합니다.

const counter = (() => {
  let privateValue = 0;
  const changeBy = (val) => {
    privateValue += val;
  };

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateValue;
    },
  };
})();

console.log("-------------------");
console.log(counter.value());

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value());

counter.decrement();
counter.decrement();

console.log(counter.value());
console.log("-------------------");
