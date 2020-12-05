'use strict';

function digPow(n, p) {
    const tempStr = n.toString();
    let tempArr = [];
    for (let i = 0; i < tempStr.length; i++) {
        const element = tempStr[i];
        tempArr.push(+element);
    }
    let sum = null;
    tempArr.forEach(x => sum += x ** p++);
    if ((Math.floor(sum / n)) * n === sum) {
        return sum / n;
    }
    return -1;

}

console.log(digPow(46288, 3));



