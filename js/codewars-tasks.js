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


function longest(s1, s2) {
    let z = [...(s1 + s2)].sort();
    // const unique = [...new Set(s1 + s2)].sort().join('');
    let unique = '';

    for (const char of z) {
        if (!unique.includes(char)) {
            unique += char;
        }
    }

    // let unique = '';
    // z.reduce((prev, cur) => {
    //     if (prev !== cur) {
    //         uniqe.push(cur);
    //     }
    // });
    return unique;
}


console.log(longest("aretheyhere", "yestheyarehere"));


