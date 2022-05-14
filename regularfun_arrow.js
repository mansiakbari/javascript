//regular function vs arrow function
const mansi = {
  firstname: "mansi",
  year: 2001,

  age: function () {
    // console.log(this);
    console.log(2022 - this.year);
    //sol1
    // const self = this;
    // const mill = function () {
    //   console.log(self);
    //   console.log(self.year >= 1999 && self.year <= 2001);
    // };

    //sol2
    const mill = () => {
      console.log(this);
      console.log(this.year >= 1999 && this.year <= 2001);
    };

    mill();
  },
  greet: () => {
    console.log(this);
    console.log(`heyy..${this.firstname}`); //never use arrow function
  },
};
mansi.greet();
mansi.age();

//argument keyword
const addex = function (a, b) {
  console.log(arguments);
  return a + b;
};
addex(2, 5);
addex(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

function car(name) {
  this.brand = name;
}
let cardata = new car("innova");
console.log(cardata);

let userinfo = {
  name: "zzz",
  fullname() {
    console.log(this.name + " normal");
  },
  fullname: () => {
    console.log(this.name + "Arraow");
  },
};
userinfo.fullname();

//diff while retrive
function mask() {
  100; //undefine
}

const maskk = () => 100;
console.log(maskk);
