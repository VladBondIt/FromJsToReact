"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest() {
        console.log('test');
    }
};


const { border, bg } = options.colors;

console.log(border, bg);

// delete options.name;
// let counter = 0;
// for (const key in options) {
//     if (typeof (options[key]) === "object") {
//         for (const i in options[key]) {
//             console.log(`Property ${i} has value ${options[key][i]}`);
//             counter++;
//             console.log(counter);
//         }
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);
//         counter++;
//         console.log(counter);
//     }
// }

// console.log(Object.keys(options).length);