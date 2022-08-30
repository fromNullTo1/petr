'use script';

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
}

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
});

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true});
})