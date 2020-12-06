'use strict';


function findOutlier(integers) {
    let res = null;
    if (integers.lenght < 3) { return; }

    let odd = [],
        zero = [],
        even = [];



    integers.forEach((item, i) => {
        if (typeof item === 'object') {
            integers = integers.concat(item);
            integers.splice(0, i);
        }
    });


    integers.forEach(item => {
        switch (0) {
            case item % 2:
                odd.push(item);
                break;
            case !item % 2:
                even.push(item);
                break;
            case item:
                zero.push(item);
                break;
        }
    });

    let all = [[...odd], [...even], [...zero]];
    console.log(all);

    all.forEach(el => {
        if (el.length === 1) {
            res = el[0];
        }
    });

    return res;
}

console.log(findOutlier([[0, 2], [1], [0]]));

