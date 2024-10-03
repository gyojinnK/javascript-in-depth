// 1)
const external = () => {
  const externalValue = "closer!";
  const internal = () => {
    console.log(externalValue);
  };
  return internal;
};

console.log("--------------log--------------");

const myFunc = external();
myFunc();

console.log("-------------------------------");

// 2)
// 이 예제에서, 단일 인자 x를 받아서 새 함수를 반환하는 함수 makeAdder(x)를 정의합니다.
// 반환되는 함수는 단일인자 y를 받아서 x와 y의 합을 반환합니다.
const makeAdder = (x) => {
  return (y) => {
    return x + y;
  };
};

// makeAdder는 함수를 만들어내는 팩토리입니다. 이는 makeAdder함수가 특정한 값을 인자로 가질 수 있는 함수들을 리턴한다는 것을 의미합니다.
// 위의 예제에서, 함수 팩토리는 인자에 5와 10을 더하는 두 개의 새로운 함수들을 만들어 냅니다.
const add9 = makeAdder(9);
const add12 = makeAdder(12);

// add5와 add10은 둘 다 클로저입니다. 이들은 같은 함수 본문 정의를 공유하지만 서로 다른 맥락(어휘)적 환경을 저장합니다.
// 함수 실행 시 add5의 어휘적 환경에서, 클로저 내부의 x는 5 이지만, add10의 맥락적 환경에서 x는 10입니다.
console.log(add9(2));
console.log(add12(5));
