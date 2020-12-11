'use strict';


let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];

let classNamesCount = {};

classNames.forEach(item => {
    if (classNamesCount[item]) {
        classNamesCount[item] += 1;
    } else {
        classNamesCount[item] = 1;
    }
});

let uniqClassNames = Object.entries(classNamesCount)
    .sort((a, b) => b[1] - a[1])
    .flat(1)
    .filter(x => typeof x === 'string');


console.log(uniqClassNames);