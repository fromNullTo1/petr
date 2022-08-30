'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// defer: 
// запускается после загрузки дом
// запускается последовательно относительно других скриптов

// async:
// страница не ждет асинх-ных скриптов
// не ждет дом, запускается, как только загружен
// скрипты не зависимы от других скриптов

// const script = document.createElement('script');
// script.src = 'test.js'; // js/test.js
// script.async = false;
// document.body.append(script);

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src; 
  script.async = false;
  document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');