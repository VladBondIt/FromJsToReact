"use strict";

let button = document.querySelectorAll('button');

console.log(button);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js/reduce.js')
