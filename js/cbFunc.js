"use strict";

function first() {

    setTimeout(() => {
        console.log(1);
    }, 1500);
}

function second() {
    console.log(2);
}

// first();
// second();

function learnJs(lang, callback) {
    console.log(`I will learn ${lang}`);
    callback();
}

function done() {
    console.log('I will done this lesson!');
}

learnJs('JavaScript', done);