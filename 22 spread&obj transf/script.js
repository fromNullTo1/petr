'use strict';

let a = 5 ;
let b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};


const copy = obj;

copy.a = 10;

console.log(obj);
console.log(copy);
// передача по ссылке в объектах, а не по значению, как в других типах

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2, 
    b: 5, 
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.y = 5;

console.log(newNumbers);
console.log(numbers);
// глубокие и поверхностные копии объектов

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdf';
console.log(newArray);
console.log(oldArray);

//spread operator razvorota

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArray2 = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
