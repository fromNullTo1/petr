'use strict';

const now = new Date();

// new Date.parse('2022-07-27')
// const now = new Date('2022-07-27');
// const now = new Date(2022, 7, 27, 20);
// const now = new Date(0);
// const now = new Date(-53452345);

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours);
console.log(now.getUTCHours);
console.log(now.getTimezoneOffset());
console.log(now.getTime()); //ms

console.log(now.setHours(18));
console.log(now);

let start = new Date();

for (let i = 0; i< 100000; i++) {
    let some = i ** 3;

}

let end = new Date();

console.log(`cycle worked ${end - start} ms`)