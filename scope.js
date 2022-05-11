//scoping..
function calage(birthyear) {
  const age = 2022 - birthyear;
  function printage() {
    let output = `${fname} you are ${age} , born in  ${birthyear}`;
    console.log(output);
    if (birthyear >= 2001 && birthyear <= 2005) {
      const str = `${fname} you are new generation..`;
      console.log(str);
      output = "new op";
    }
  }
  printage();
  return age;
}
const fname = "Mansi";
calage(2001);
//
console.log(me);
// console.log(job);
// console.log(year);

var me = "mansi";
let job = "student";
const year = 2001;
//functions
console.log(add(2, 3)); //call declaration before define
console.log(addex(2, 3));
console.log(addarrow(2, 3));
function add(a, b) {
  return a + b;
}
const addex = function (a, b) {
  return a + b;
};
const addarrow = (a, b) => a + b;
