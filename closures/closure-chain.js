// 1)
// 모든 클로저에는 세가지 스코프(범위)가 있습니다:
// - 지역 범위 (Local Scope, Own scope)
// - 포함하고 있는 범위 (블록, 함수 또는 모듈 범위일 수 있음)
// - 전역 범위 (Global Scope)

// 일반적으로 하는 실수는 외부 함수 자체가 중첩된 함수인 경우,
// 외부 함수의 범위에 대한 접근에 외부 함수의 둘러싸고 있는 범위가 포함된다는 사실을 깨닫지 못하는 것입니다.
// 즉, 효과적으로 함수 범위 체인을 생성합니다. 아래 예제를 확인해보세요.

e = 100;
const sum = (a) => {
  return (b) => {
    return (c) => {
      // 외부 함수 범위 (outer functions scope)
      return (d) => {
        // 지역 범위 (local scope)
        return a + b + c + d + e;
      };
    };
  };
};

console.log(sum(1)(2)(3)(4));

const sum1 = sum(1);
const sum1_2 = sum1(2);
const sum1_2_3 = sum1_2(3);
const sum1_2_3_4 = sum1_2_3(4);
console.log(sum1_2_3_4);

// 위의 예제를 보면, 일련의 중첩된 함수들을 확인할 수 있습니다.
// 이 함수들은 전부 외부 함수의 범위에 접근할 수 있습니다.
// 이 문맥에서는 클로저가 선언된 "모든" 외부 함수의 스코프에 접근한다고 말할 수 있습니다.

// 2)
// 클로저는 블록 범위와 모듈 범위에서도 변수를 캡처할 수 있습니다.
// 예를 들어, 다음은 블록 범위 변수 y에 대한 클로저를 생성합니다.
const outer = () => {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }

  console.log(typeof y); // undefined
  console.log(getY()); // 6
};

outer();

// 모듈에 대한 클로저는 더욱 흥미롭습니다.
import { setValueX, getValueX } from "./module-closer";

console.log(getValueX());
console.log(setValueX(6));
console.log(getValueX());
