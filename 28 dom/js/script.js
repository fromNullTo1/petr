'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); //[1]
console.log(btns);
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(e => {
  console.log(e);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
