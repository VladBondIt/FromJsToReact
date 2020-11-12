"use strict";

let a = [1, 2, 14, 5, 8, 17, 2, 15];

let b = a.reduce((prev, item) => {
    if (prev < item) {
        return item;
    } else {
        return prev;
    }
});

// let b = a.reduce((zero, item) =>  zero < item ? item : zero );

// console.log(b);


// let max = 0,
//     index = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i];
//         index = i;
//     }

// }

// console.log(max, index);

let d = a.reduce((prev, item, index) => {
    if (prev[1] < item) {
        return [index, item];
    } else {
        return prev;
    }
}, [0, a[0]]);

console.log(d);
// let flat = [].concat(...data);

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((prev, item) => {
    return prev.concat(item);
});

console.log(flat);


const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}