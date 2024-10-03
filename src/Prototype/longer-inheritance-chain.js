// 1)
// Constructor.prototype 속성은 Constructor.prototype의 자체 [[Prototype]]을 포함하여, 생성자 인스턴스의 [[Prototype]]이 됩니다.
// 기본적으로 Constructor.prototype은 일반 객체입니다.
// 즉, Object.getPrototypeOf(Constructor.prototype) === Object.prototype 입니다.
// 유일한 예외는 Object.prototype 자체이며, [[Prototype]]은 null입니다.
// 즉, Object.getPrototypeOf(Object.prototype) === null입니다. 따라서, 일반적인 생성자는 다음 프로토타입 체인을 빌드합니다.

function Constructor() {}

const obj1 = new Constructor();
// obj1 ---> Constructor.prototype ---> Object.prototype ---> null

// 2)
// 더 긴 프로토타입 체인을 구축하려면, Object.setPrototypeOf() 함수를 통해 Constructor.prototype의 [[Prototype]]을 설정할 수 있습니다.
function Base() {}
function Derived() {}
// `Derived.prototype`의 `[[Prototype]]`을 `Base.prototype`으로 설정합니다.
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj2 = new Derived();
// obj2 ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null

// 클래스 문법 용어로, 이는 extends 구문을 사용하는 것과 동일합니다.
class Base {}
class Derived extends Base {}

const obj3 = new Derived();
// obj3 ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
