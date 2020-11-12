'use strict';

// let str = 'some',
//     strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2]);

const soldier = {
    health: 400,
    armour: 100,
    sayHello() {
        console.log('Hello!');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

john.__proto__ = soldier;

console.log(john.armour);


// Object.setPrototypeOf(john, soldier);
// john.sayHello();