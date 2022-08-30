'use strict';

const log = function(a, b, ...rest) {
  console.log(a, b, rest);
}

log('fdsa','sdf', 'fskjfd', 'sfdkjk');

// function calcOrDouble(number, basis) {
//   basis = basis || 2;
//   console.log(number * basis);
// }
function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3);
