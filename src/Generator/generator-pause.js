// 제너레이터 함수는 일반 함수와는 다른 독특한 동작을 한다.
// 제너레이터 함수는 일반 함수와 같이 함수의 코드 블록을 한 번에 실행하지 않고 함수 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재시작할 수 있는 특수한 함수이다.

function* counter() {
  console.log("첫번째 호출");
  yield 1;
  console.log("두번째 호출");
  yield 2;
  console.log("세번째 호출");
}

const gCounter = counter();

console.log(gCounter.next());
console.log(gCounter.next());
console.log(gCounter.next());
