let arr = [1, 2, 3];
for (const a of arr) console.log(a);

console.log("------------------");

arr[Symbol.iterator] = null;
for (const a of arr) console.log(a);
