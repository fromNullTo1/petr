'use strict';

function first() {
  setTimeout(() => {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

function done() {
  console.log('i finished this lesson');
}

learnJS('JS', done);