'use strict';

const arr = [1, 2, 3, 6, 8];

arr.pop();
arr.push(10);
 console.log(arr);

for (let i - 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

// arr[99] = 0;
// console.log(arr.length);

arr.forEach((e, i, arr) => {
  console.log(`${i}: ${item} into ${arr}`);
});

// for of you can use break and continue 

// map and filter return new arr

const str = prompt('');
const products = str.split(', ');

// split - from str to arr / join - from arr to str

products.sort();

function cupmareNum(a, b) {
  return a - b;
}