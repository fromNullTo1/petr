'use strict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
console.log(btns[0].classList.add('red'));
console.log(btns[1].classList.add('red'));
console.log(btns[0].classList.add('red', 'fasdfasd'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  btns[1].classList.toggle('red');
})

console.log(btns[0].className); // old useless
console.log(btns[0].classList);

// delegation

wrapper.addEventListener('click', e => {
  // console.dir(e.target);
  if (e.target && e.target.matches('button.red')) {
    console.log('hello')
  }
  // if (e.target && e.target.classList.contains('red')) {
  //   console.log('hello')
  // }
  // if (e.target && e.target.tagName == 'BUTTON') {
  //   console.log('hello')
  // }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// forEach no delegation, no handlers for new elements

