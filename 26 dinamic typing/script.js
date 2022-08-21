'use strict';

console.log(typeof(String(null)));
console.log(typeof(String(4)));
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

console.log('https://vk.con/catalog/' + num);

const fontSize = 26 + 'px';

//to num

console.log(typeof(Number('4')));

console.log(typeof(+'5'));

parseInt('15px', 10);

let answ = +prompt('hello', '');

//to boolean

// 0, "", null, undefined, NaN;

let switcher = null;

if (switcher) {
  console.log('working...');  
}

let switcher = 1;

if (switcher) {
  console.log('working...');  
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!'4'));
