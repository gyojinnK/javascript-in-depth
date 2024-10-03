const user = () => {
  let name = "";
  let age = 0;
  let job = "";

  const changeName = (newName) => {
    return (name = newName);
  };
  const changeAge = (newAge) => {
    return (age = newAge);
  };
  const changeJob = (newJob) => {
    return (job = newJob);
  };

  return {
    setName(name) {
      changeName(name);
    },
    setAge(age) {
      changeAge(age);
    },
    setJob(job) {
      changeJob(job);
    },
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
    getJob() {
      return job;
    },
    getInfo() {
      return `${name} / ${age} / ${job}`;
    },
  };
};

const kiber = user();
const gyojink = user();

kiber.setAge(27);
kiber.setName("박기범");
kiber.setJob("HR Manager");

gyojink.setAge(27);
gyojink.setName("강교진");
gyojink.setJob("Frontend Developer");

console.log(kiber.getInfo());
console.log(gyojink.getInfo());
