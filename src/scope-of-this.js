function normalFn() {
  return this;
}

console.log(normalFn());

class Obj {
  getThis() {
    return this;
  }
}
const obj = new Obj();
console.log(obj.getThis);

class Obj1 {
  arrowFn = () => {
    return this;
  };
}
const obj1 = new Obj1();
console.log(obj1.arrowFn());
