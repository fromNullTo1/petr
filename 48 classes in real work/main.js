'use strict';

class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.currency = 50;
    this.changeToRUB();
  }

  changeToRUB() {
    this.price = this.price * this.currency;
  }

  render() {
    const div = document.createElement('div');    
    div.classList.add('menu__item');
    div.innerHTML = `
    <div class="menu__item">
      <img src=${this.img} alt="${this.alt}">
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>"${this.price}</span> руб/день</div>
      </div>
    </div>
    `;
    this.parent.append(div);
  }

}

new MenuCard(
  "img/tabs/elite.jpg",
  "vegy",
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  229,
  '.menu .container'
).render();

const cardOne = new Card('asdfk.sdfs', 'fjkasdjfkalsdf', 'fsadf', 550);
cardOne.createDiv();



// class MenuCard {
//   constructor(src, alt, title, descr, price) {
//     this.src = src;
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//   }
//     this.html = `
//     <img src=${img} alt="elite">
//     <h3 class="menu__item-subtitle">${title}</h3>
//     <div class="menu__item-descr">${descr}</div>
//     <div class="menu__item-divider"></div>
//     <div class="menu__item-price">
//         <div class="menu__item-cost">Цена:</div>
//         <div class="menu__item-total"><span>"${price}</span> грн/день</div>
//     </div>
//     `;
//   }
//   createDiv() {
//     const div = document.createElement('div');
//     div.classList.add('menu__item');
//     div.innerHTML = this.html;
//     document.body.append(div);
//   }
// }

// const cardOne = new Card('asdfk.sdfs', 'fjkasdjfkalsdf', 'fsadf', 550);
// cardOne.createDiv();



// class MenuCard {
//   constructor(src, alt, title, descr, price, parentSelector) {
//     this.src = src;
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.parent = document.querySelector(parentSelector);
//     this.currency = 50;
//     this.changeToRUB();
//   }

//   changeToRUB() {
//     this.price = this.price * this.transfer;
//   }

//   render() {
//     const div = document.createElement('div');    
//     div.classList.add('menu__item');
//     div.innerHTML = `<img src=${this.img} alt="${this.alt}">
//     <h3 class="menu__item-subtitle">${this.title}</h3>
//     <div class="menu__item-descr">${this.descr}</div>
//     <div class="menu__item-divider"></div>
//     <div class="menu__item-price">
//         <div class="menu__item-cost">Цена:</div>
//         <div class="menu__item-total"><span>"${this.price}</span> руб/день</div>
//     </div>
//     `;
//     this.parent.append(div);
//   }

// }

// new MenuCard(
//   "img/tabs/elite.jpg",
//   "vegy",
//   'Меню "Фитнес"',
//   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//   229,
//   '.menu .container'
// ).render();