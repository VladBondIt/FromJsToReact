"use strict";

// Инкапсуляция 

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function () {
//         // console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };
//     this.setAge = function (num) {
//         if (typeof num === 'number' && num > 0 && num < 100) {

//             userAge = num;
//         } else {
//             console.log('Некорректные данные');
//         }
//     };

// }


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     // Эксперементальный синтаксис, создание приватных свойств
//     #surname = 'Pork';

//     say = () => {
//         // console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
//         console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`);
//     }

//     // say() {
//     //     // console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
//     //     console.log(`Имя пользователя ${this.name} ${this.surname}, возраст ${this._age}`);
//     // }

//     get age() {
//         return this._age;
//     }
//     set age(num) {
//         if (typeof num === 'number' && num > 0 && num < 100) {

//             this._age = num;
//         } else {
//             console.log('Некорректные данные');
//         }
//     }

// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.#surname);

// ivan.say();


// class Bird {
//     constructor(name, legs) {
//         this.name = name;
//         this.legs = legs;
//     }

//     #tails = 1;

//     get tails() {
//         return this.#tails;
//     }

//     set tails(num) {
//         this.#tails = num;
//     }

// }

// const sparrow = new Bird('Lolly', 2);

// console.log(sparrow.tails);

// console.log(sparrow);

