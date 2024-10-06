// ES6에서 도입된 제너레이터(Generator) 함수는 이터러블을 생성하는 함수이다.
// 제너레이터 함수를 사용하면 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블을 구현할 수 있다.
// 또한 제너레이터 함수는 비동기 처리에 유용하게 사용된다.

const createInfinityByIteration = () => {
  let i = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return { value: i++ };
    },
  };
};

for (const n of createInfinityByIteration()) {
  console.log(n);
  if (n >= 5) {
    break;
  }
}

console.log("-------------------");

// 무한 이터러블을 생성하는 제너레이터 함수
function* createInfinityByGenerator() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

for (const n of createInfinityByGenerator()) {
  console.log(n);
  if (n >= 5) break;
}
