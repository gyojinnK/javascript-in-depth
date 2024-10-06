let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    cur: this.from,
    last: this.to,

    next() {
      if (this.cur <= this.last) {
        return { value: this.cur++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}
