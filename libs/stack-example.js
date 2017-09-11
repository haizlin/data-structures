'use strict';

let Stack = require('./stack.js');

let stack = new Stack();

stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);
stack.push(55);

console.log(stack.peek());
console.log(stack.toString());