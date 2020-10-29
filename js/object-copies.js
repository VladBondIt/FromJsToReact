'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b, a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;


// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;




// const add = {
//     d: 17,
//     e: 27
// };

// console.log(Object.assign(numbers, add));


// console.log(newNumbers);
// console.log(numbers);

// const clone = Object.assign({}, add)

// console.log(clone);

const oldArray = ['a', 'b', 'c'];

const newArray = [...oldArray];

newArray[1] = 'j';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'twitter'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const q = {
    one: 1,
    two: 2
};

const newQ = { ...q };

console.log(newQ);