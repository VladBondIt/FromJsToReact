"use strict";

const input = document.querySelector('.form-control');

//  RegExp - ругулярное выражение

// new RegExp('pattern', 'flags');

// /pattern/flags

// const ans = prompt('Enter your name');

// const reg = /n/i; // i - игнор регистра, g - по все строке, m - много строчный режим
// console.log(reg.test(ans)); // true|folse

// input.addEventListener('blur', () => {
//     let ans = input.value.match(/\d/ig).join('');
//     console.log(ans);
// });

const str = 'My name is R2D2';

console.log(str.match(/\D/ig).join(''));

// const reg = /\d/ig; // i - игнор регистра, g - по все строке, m - много строчный режим
// let res = ans.match(reg).join('');
// console.log(res);

// \D ищем все не числа
// \W ищем все не буквы
// \S

// \d ищем цифры 
// \s ищем все буквы
// \s ищем все пробелы

// console.log(ans.search(reg)); //false = -1
// Match возвращает массив с совпадениями
// console.log(ans.match(reg));
// Replace заменяет строку, первое значение что именно заменям, второе значение на что хотим поменять.

// const pass = prompt('Your password');

// // console.log(pass.replace(/./g, '*'));
// console.log(pass.replace(/\./g, '*')); // меняет только точки на звезды

// Заменяем дефисы на двоеточия
// console.log('12-34-56'.replace(/-/g, ':'));