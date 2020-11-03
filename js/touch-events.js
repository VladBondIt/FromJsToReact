"use strict";

// touchstart
// touchmove
// touchend

// touchenter
// touchleave
// touccancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('#current');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
        console.log(e.changedTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });
});

// touches
// targetTouches
// changedTouches