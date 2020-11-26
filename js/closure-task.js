'use strict';


function sum(num) {
    console.log(num);
    return function (x) {
        const z = num + x
        console.log(z);
        return function (c) {
            const b = z + c
            console.log(b);
        };
    }
}

sum(1)(2)(3);

