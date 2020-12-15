'use strict';



function simpleNum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

function getPrime(num) {
    let res = [];
    for (let i = 2; i < num; i++) {
        if (simpleNum(i)) {
            res.push(i);
        }
    }
    return res;
}
function getPrime(num) {
    let temp = [];
    let res = [];
    let nums = [2, 3, 5, 7];
    for (let i = 2; i <= num; i++) {
        temp.push(i);
    }
    nums.forEach((it) => {
        temp.forEach((item, i) => {
            if (item % it === 0 && item !== it) {
                temp.splice(i, 1);
            }
        });
    });
    for (let i = 0; i < temp.length; i++) {
        if (simpleNum(temp[i])) {
            res.push(temp[i]);
        }
    }
    return res;
}



console.log(getPrime(250));