"use strict";

// Методы массивов

// filter - принимает правило по котору нужно фитровать

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// Map изменяет данные массива и возвращает новый измененный массив

// const answers = ['IvAn', 'AnnA', 'HelLO'];
// const result = answers.map(item => item.toLowerCase());

// Так делать не стоит
// let answers = ['IvAn', 'AnnA', 'HelLO'];
// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// Every/some ищет совпадения,найденное значение вернет true и false если не найдет.

// const some = [4, 'qwq', 'dfgdafefef'];
// console.log(some.some(item => typeof item === 'number'));
// Сравнивает весь массив, а не первое подходящее значение
// console.log(some.every(item => typeof item === 'number'));

// reduce 

// const arr = [4, 5, 1, 2, 6];
// // 0        4
// // 4        5
// // 9        1
// // 10       2
// // 12       6
// // 18
// const result = arr.reduce((sum, current) => sum + current, 3);

// console.log(result);

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const result = names.reduce((sum, current) => `${sum} ${current}`);

// console.log(result);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

// Chaining
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0].toUpperCase());

console.log(newArr);

