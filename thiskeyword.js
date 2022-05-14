//example

const laptop1 = {
  cpu: "i5",
  ram: 16,
  brand: "hp",

  config1: function () {
    console.log(this.cpu); //laptop1.cpu...instend og obj name use this.
  },
};
laptop1.config1();

const laptop2 = {
  cpu: "i7",
  ram: 8,
  brand: "dell",

  compare: function (other) {
    if (this.cpu > other.cpu) {
      console.log(this);
    } else console.log(other);
  },

  config2: function () {
    console.log(this.ram);
  },
};
laptop2.config2();
laptop2.compare(laptop1);

console.log(this);
const calage = function (birthyear) {
  console.log(2022 - birthyear);
  console.log(this); //in this func this keyword undefine
};
calage(2001);
//arrow function
const calagearrow = (birthyear) => {
  console.log(2022 - birthyear);
  console.log(this); //in this is window object ...arrow function not get its own this keyword.
};
calagearrow(2001);
// this inside method
// const demo = {
//   name: "mansi",
//   year: 2001,
//   calage: function () {
//     console.log(this);
//     console.log(2022 - this.birthyear);
//   },
// };
// demo.calage(2001);
const demo = {
  year: 2001,
  calage: function () {
    // console.log(this);
    console.log(2022 - this.birthyear);
  },
};
demo.calage();
const abc = {
  year: 1996,
};
abc.calage = demo.calage; //borrow method one obj to other obj
abc.calage();
