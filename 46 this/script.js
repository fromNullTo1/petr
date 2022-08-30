'use strict';

// function showThis() {
//     console.log(this);
// }

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this); 
        return this.a + this.b;
    }

    console.log(sum());
}
function showThis2(a, b) {
    console.log(this);
    function sum() {
        console.log(this); 
        return this.a + this.b;
    }

    console.log(sum());
}

showThis(4, 5);
showThis2(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        return this.a + this.b; 
    }
};
obj.sum();

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
        return this.a + this.b; 
    }
};
obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name = 'John'
}

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));
//without strict - window, strict - undefined
//контекст у методов объекта это и есть сам объект
//this в конструкторах и классах - это новый экземпляр объекта
//ручная привазка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});
//this = e.target

btn.addEventListener('click', () => {
    console.log(this);
    this.style.backgroundColor = 'red';
});
//doesnt work. this loses

btn.addEventListener('click', e => {
    console.log(e.target);
    e.target.style.backgroundColor = 'red';
});
//works
const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        }

        say();
    }
}

obj2.sayNumber();

const double = a => {
    return a * 2;
};

const double2 = a => a * 2; 
// => take this from parent , doesnt have self context
