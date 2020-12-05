'use strict';

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

arr.forEach((item) => {
    item.forEach(k => {
        arr.push(k);
    });

});

arr.push([10, 11, 12]);
arr.push([88, 91, 52]);
arr.push([85, 21, 32]);

console.log(arr);


function filterArr(array) {
    let objCount = 0;
    array.sort((function (a, b) {
        if (typeof a === 'object') {
            return -1;
        }
        if (typeof b !== 'object') {
            return 1;
        }

        return 0;
    }));

    array.forEach((item) => {
        if (typeof item === 'object') {
            objCount++;
        }
    });

    console.log(objCount);

    array.splice(0, objCount);
}


filterArr(arr);

console.log(arr);
