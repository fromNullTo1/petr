const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.onclick = () => {
  alert('click');
};

btn.addEventListener('click', () => {
  alert('second click');
})
btn.addEventListener('mouseenter', () => {
  console.log('hover');
})

btn.addEventListener('mouseenter', (e) => {
  console.log(e);
})
btn.addEventListener('mouseenter', (e) => {
  console.log(e.target);
  e.target.remove();
})

const deleteElement = (e) => {
  console.log(e.target);
  e.target.remove();
}

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);

let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  i++;
  if (i == 1) {
    btn.removeEventListener('click', deleteElement);
  }
}

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

всплытие событий, сначала событие происходит на вложенном элементе, затем на родительском


const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
}

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);