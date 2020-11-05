"use strict";

// Обычная функция котекст будет равен виндоу, а строгом режиме undefined

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// методы объектов. контекст - облегчение работы с Объектаим

// const obj = {
//     a: 20,
//     b: 15,
//     sum() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// Контекст Конструктора и Класса это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const vlad = new User('Vlad', 28);

// Ручное присваивание контекста функциям

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }


// const user = {
//     name: 'John'
// };


// sayName.call(user, 'Smith');
// // Разница передалчи переменных в массиве для apply
// sayName.apply(user, ['Smith']);
// // Создает новую функцию

// function count(num) {
//     return this * num;
// }
// // Двойка это this 
// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));


const btn = document.querySelector('.btn');

// Стрелочная функция не имеет собственного контекста вызова, она берет его от родителя.

btn.addEventListener('click', function () {
    console.log(this);
    this.style.background = 'red';
});

const obj = {
    num: 5,
    sayNumber() {
        // Берем контекст от от функции - метода sayNumber которая указывает на объект obj
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

// Стрелочная функция всегда возращает результат сама.

// const double = a => a * 2;

// console.log(double(8));
const double = (a, b) => a * b;

console.log(double(8, 3));
