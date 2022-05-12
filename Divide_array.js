//Divide Array
const first1 = [];
const second2 = [];
function array1(arr) {
  if (!arr.length / 2) {
    console.log("Not possible");
  } else {
    console.log("posssible");

    for (let i = 0; i <= arr.length - 1; i = i + 1) {
      if (!first1.includes(arr[i]) && first1.length !== 3) {
        first1.push(arr[i]);
      } else {
        second2.push(arr[i]);
      }
    }
    console.log(first1, second2);
    return array1;
  }
}
array1([2, 1, 2, 3, 3, 4]);

//using indexof..
//Divide Array
const first = [];
const second = [];
let ans1 = 0;
let ans2 = 0;
function array(arr) {
  for (let i = 0; i <= arr.length - 1; i = i + 1) {
    if (first.indexOf(arr[i]) && first.length !== 2) {
      first.push(arr[i]);
    } else {
      second.push(arr[i]);
    }
  }
  console.log(first, second);
  return array;
}
array([1, 2, 2, 1]);
