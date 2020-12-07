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

// Первый уникальный лемент в массиве

const findUniq = (arr) => arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x));

console.log(findUniq([1, 1, 1, 2, 1, 1]));

const findUniqChar = (str) => [...str].find(x => str.indexOf(x) === str.lastIndexOf(x));

console.log(findUniqChar('moonmeno'));

function solution(str) {
    if (str === '') {
        return [];
    }
    let arr = [...str],
        temp = [],
        res = [],
        endSlice = 2;

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr.slice(i, endSlice++));
    }
    if (arr.length % 2 === 0) {
        temp.forEach((item, i) => {
            if (i % 2 === 0) {
                res.push(item.join(''));
            }

        });
    } else if (arr.length % 2 !== 0) {
        temp.forEach((item, i) => {
            if (i % 2 === 0 && item.length === 2) {
                res.push(item.join(''));
            }
            if (item.length === 1) {
                res.push(item + '_');
            }
        });
    }

    return res;
}

function solution(str) {
    let arr = [];
    for (let i = 0; i < str.length; i += 2) {
        let second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}

console.log(solution("abcdefg"));


