"use strict";


// Модульность

// const number = 1;

// (function () {
//     let number = 2;
//     console.log(number);
//     console.log(number + 3);
// }());

// console.log(number);

// Объектный интерфейс

// const user = (function () {
//     const privat = function () {
//         console.log('I am privat!');
//     };

//     return {
//         sayHello: privat,
//     };
// }());


// user.sayHello();


function MyModule() {
    this.hello = function () {
        console.log('Hello');
        console.log(this);
    };

    this.goodbye = function () {
        console.log('bye!');
        console.log(this);
    };
}

module.exports = MyModule;