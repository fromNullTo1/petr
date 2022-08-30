'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');
const oneHeart = wrapper.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

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
const text = document.createTextNode('I was here');

div.classList.add('black');
// document.body.append(div);
// wrapper.append(div);
// wrapper.appendChild(div);


// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

//old
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();

//old
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);

//old
// wrapper.replaceChild(circles[0], hearts[0])

// div.innerHTML = 'Hello';
div.innerHTML = '<h1>Hello</h1>';
hearts[0].after(div);

// div.textContent = 'hello'; 
div.insertAdjacentHTML('beforebegin', '<h2>hello</h2>'); //add html code ... element


// <p class="text" href="some">some text</p>

const textP = document.querySelector('#text');
textP.id;
textP.href = 'another' // work only with a, and some tags
textP.title = 'some title';
