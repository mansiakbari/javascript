//Divide Array
const first1 = [];
const second2 = [];
let ans1 = 0;
let ans2 = 0;
function array(arr) {
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
    return array;
  }
}
array([2, 1, 2, 3, 3, 4]);
