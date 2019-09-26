import moment from 'moment';
var math = require('mathjs');

console.log(moment().format());
console.log(math.pow([[-1, 2], [3, 1]], 2));

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
console.log("wat");