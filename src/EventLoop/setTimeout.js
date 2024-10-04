// setTimeout 함수는 두 개의 매개변수를 가집니다.
// 첫 번째는 큐에 추가할 메시지, 두 번째는 시간 값(선택 사항, 기본 값 0)입니다.
// 시간 값은 메시지를 큐에 추가하기까지 기다릴 (최소) 지연 시간을 나타냅니다.
// 큐에 다른 메시지가 없고 스택이 비어있다면 setTimeout의 메시지는 딜레이 직후 즉시 처리됩니다.
// 그러나, 다른 메시지가 존재한다면 setTimeout은 앞선 메시지의 처리를 기다려야 합니다.
// 그래서 두 번째 값은 정확한 지연시간이 아닌, '최소' 지연 시간만 나타냅니다.

// 다음은 setTimeout이 타이머 만료 직후 즉시 실행되지 않는 예제입니다.
const seconds = new Date().getTime() / 1000;

setTimeout(function () {
  // "2"를 출력, 즉 500밀리초가 지난 후 즉시 실행된 것이 아니라는 것
  console.log(`${new Date().getTime() / 1000 - seconds}초 후 실행됩니다.`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("좋아요, 2초간 반복했습니다.");
    break;
  }
}
