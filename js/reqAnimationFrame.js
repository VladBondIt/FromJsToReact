"use strict";


// Js Animation

const btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

let pos = 0;


function myAnimation() {

    pos += 1.5;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }


}

btn.addEventListener('click', function () {
    requestAnimationFrame(myAnimation);
});

let id = requestAnimationFrame(myAnimation);

cancelAnimationFrame(id);