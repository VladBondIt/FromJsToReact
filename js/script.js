"use strict";

let btns = document.querySelectorAll('.first button'),
    wrapper = document.querySelector('.first');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(2));
// console.log(btns[0].classList.add('blue'));
// console.log(btns[0].classList.toggle('blue'));
// console.log(btns[0].classList.contains('blue'));

// if (btns[0].classList.contains('red')) {

// }

// btns[0].addEventListener('click', () => {
//     if (!btns[0].classList.contains('red')) {
//         btns[0].classList.add('red');
//     } else {
//         btns[0].classList.remove('red')
//     }
// });

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == 'BUTTON') {
//         console.log('Hello');
//     }
//     if (e.target && e.target.classList.contains('red')) {
//         console.log('Hello');
//     }
//     if (e.target && e.target.matches('button.red')) {
//         console.log('Hello');
//     }
//     console.dir(e.target);
// })