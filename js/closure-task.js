'use strict';


function sum(num) {
    console.log(num);
    return function (x) {
        console.log(num + x);
        return function (c) {
            return console.log((num + x) + c);
        }
    }
}

sum(1)(2)(3);