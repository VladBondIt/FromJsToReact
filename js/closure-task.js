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

const sum = n => x => c => console.log(n, x, c, c + (x + n));

sum(1)(2)(3);

function sum2(n) {
    console.log(n);
    return (b) => {
        return sum2(n + b);
    };
}

sum2(1)(2)(3)(6)(22);


