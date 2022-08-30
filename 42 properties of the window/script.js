'use strict';


//weird BEHAVIOR after changes in css liveserver and js dont show correct client width or height
const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
  // box.style.height = height + 'px';
  console.log(box.scrollTop)
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);
document.documentElement.scrollTop = 0;
console.log(document.scrollTop); //doesnt work

window.scrollBy(0, 400); // from current pos
window.scrollTo(0, 400);

