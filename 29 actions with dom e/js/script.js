'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

console.dir(box);
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px'; //`` we can use;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(e => {
  e.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

