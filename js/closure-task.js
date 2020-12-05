'use strict';


// function sum(num) {
//     console.log(num);
//     return function (x) {
//         const z = num + x;
//         console.log(z);
//         return function (c) {
//             const b = z + c;
//             console.log(b);
//         };
//     }
// }

const sum = num => x => c => console.log(num, x, c, c + (x + num));

sum(1)(2)(3);

