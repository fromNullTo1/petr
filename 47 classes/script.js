'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor (height, width, text, bgColor) {
    super(height, width); //always first row
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red')
div.showMyProps();
console.log(div.calcArea());
console.log('test');
div.calcArea()

const square = new Rectangle(10, 10);
const longRect = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(longRect.calcArea());


