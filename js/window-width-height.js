'use strict';


const box = document.querySelector(".wrapper"),
    btn = document.querySelector('.btn');

// let width = box.clientWidth,
// height = box.clientHeight;
// let width = box.offsetWidth,
//     height = box.offsetHeight;
let width = box.scrollWidth,
    height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = height + 'px';
    console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);

console.log(document.documentElement.scrollTop);