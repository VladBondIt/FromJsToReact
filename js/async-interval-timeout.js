"use strict";

const btn = document.querySelector('.btn');

let timerId,
    i = 1;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 5);
    function frame(id) {
        if (pos === 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);
// });


// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//         i = 0;
//     }
//     console.log('text');
//     i++;
// }

// Ждет завершения функции, рекурсивный подход

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);
