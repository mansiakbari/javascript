// function a() {
//   console.log("hello");
// }
// function b() {
//   console.log("bye");
// }
// b();
// a();
//callback
// const student = [
//   { name: "mansi", subject: "php" },
//   { name: "pari", subject: "wp" },
// ];
// function enrollstd(student, callback) {
//   setTimeout(function () {
//     // student.push(student);
//     console.log("std enrolled");
//     callback();
//   }, 3000);
// }
// function getstd() {
//   setTimeout(function () {
//     let str = "";
//     student.forEach(function (student) {
//       str += `${student.name}`;
//     });
//     console.log(str);
//     console.log("std entered");
//   }, 5000);
// }
// let newstd = { name: "siya", subject: "cn" };
// enrollstd(newstd, getstd);
// getstd();

//callback
function display(sum) {
  console.log("sum is " + sum);
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, display);

promise;
const student = [
  { name: "mansi", subject: "wp" },
  { name: "pri", subject: "aj" },
];
function enrollstd(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("std enrollrd");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
function getstd() {
  setTimeout(function () {
    let str = "";
    student.forEach(function (student) {
      console.log(`${student.name}`);
    });
    console.log("std fetched");
  }, 5000);
}
let newstd = { name: "siya", subject: "ap" };
enrollstd(newstd)
  .then(getstd)
  .catch(function () {
    console.log("erroe");
  });

function myDisplayer(some) {
  console.log(some);
}
let myPromise = new Promise(function (Resolve, Reject) {
  let x = 0;
  if (x == 1) {
    Resolve("OK");
  } else {
    Reject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//async/await
async function test() {
  console.log("a");
  await console.log("b");
  console.log("c");
}
test();
console.log("1");
console.log("2");
