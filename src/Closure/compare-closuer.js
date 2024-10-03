const outer = () => {
  let privateValue = "Private!";
  const inner = () => {
    console.log(privateValue);
  };
  return inner;
};

const newFn = outer();
console.log("-----------");
console.log(newFn());
