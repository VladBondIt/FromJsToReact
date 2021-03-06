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

// Первый уникальный элемент в массиве

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


function anagramm(str, otherStr) {
    const tempStr = toSort(str);
    const tempOtherStr = toSort(otherStr);

    function toSort(str) {
        const temp = str.toLowerCase();
        return [...temp].sort().join('');
    }
    // console.log(tempStr);
    // console.log(tempOtherStr);

    if (tempStr === tempOtherStr) {
        return true;
    } else {
        return false;
    }
}

console.log(anagramm('Friend', 'Finder'));


// RGB ==> HEX

function rgb(r, g, b) {
    function check(x) {
        if (x > 255) {
            x = 255;
        } else if (x < 0) {
            x = 0;
        }
        // Переводим в шеснадцатеричную систему исчисления
        const hex = x.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    r = check(r);
    g = check(g);
    b = check(b);

    const res = (r + g + b).toUpperCase();

    return res;
}

// Tower builnibg))

function towerBuilder(nFloors) {
    let tempFloor = nFloors;
    let tower = [];
    let res = [];

    for (let i = 1; i <= nFloors; i++) {
        tower.push(base(tempFloor));
        tempFloor -= 1;
    }

    function base(numsOfStars) {
        let x = (numsOfStars * 2) - 1;
        let stars = '';
        for (let i = 1; i <= x; i++) {
            stars += '*';
        }
        return stars;
    }

    let numSpace = Math.floor(((nFloors * 2) - 1) / 2) + 1;
    let numSpaceStart = numSpace - 1;
    tower.reverse();

    tower.forEach(item => {
        let z = '';
        let str = item.padEnd(numSpace);
        let x = z.padStart(numSpaceStart);
        res.push(x + str);
        numSpaceStart--;
        numSpace++;
    });

    return res;
}

console.log(towerBuilder(6));


// Check nums
function checkNums() {

    let res = [];

    for (let i = 10100; i < 12000; i += 2) {

        res.push(i);

    }

    res = res
        .filter((x) => (x + '')[2] % 2 !== 0)
        .filter((num) => [...(num + '')].reduce((prev, cur) => (+prev) + (+cur)) % 4 === 0);

    return res;
}

console.log(checkNums());


const lastDigit = function (str1, str2) {
    return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10;
};

console.log(lastDigit("1606938044258990275541962", "2037035976334486086268"));


function generateHashtag(str) {
    console.log(str.length);

    if (str.trim() === '') {
        return false;
    }

    const result = str.split(' ').reduce((previousValue, currentValue, currentIndex) => {
        if (currentIndex === 0) {
            previousValue.push('#')
        }
        if (currentValue !== '') {
            previousValue
                .push([...currentValue]
                    .map((char, index) => index === 0
                        ? char.toUpperCase()
                        : char).join(''))
        }
        return previousValue
    }, []).join('');

    return result.length <= 140 ? result : false
}

generateHashtag("#A" + "a".repeat(138))

// "10.0.0.0", "10.0.0.50"
// "10.0.0.0", "10.0.1.0"
// "20.0.0.10", "20.0.1.0"


function ipsBetween(start, end) {
    const arrStart = start.split('.')
    const arrEnd = end.split('.')
    let res = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
    };

    arrStart.forEach((value, i) => {
        if (value !== arrEnd[i]) {
            if (value < arrEnd[i]) {
                for (let j = +value; j < +arrEnd[i]; j++) {
                    res[i] += 1
                }
            } else {
                res[i] = "m " + value
            }
        }
    })

    return Object.entries(res).reduce((acc, curr) => {
        switch (true) {
            case curr[0] === "0" && curr[1] !== 0:
                acc += (65536 * 256) * curr[1]
                return acc
            case curr[0] === "1" && curr[1] !== 0:
                acc += (256 ** 2) * curr[1]
                return acc
            case curr[0] === "2" && curr[1] !== 0:
                acc += (curr[1] * 256)
                return acc
            case curr[0] === "3" && curr[1] !== 0:
                if (curr[1][0] === 'm') {
                    acc -= +curr[1].split(' ')[1]
                } else {
                    acc += curr[1]
                }
                return acc
        }
        return acc;
    }, 0)
}

console.log(ipsBetween('1.2.3.4', '5.6.7.8'))

function domainName(url) {

    function trimWww(str) {
        let temp = '';
        str.split('.').forEach((value, index) => {
            console.log(value)
            if (index === 0 && value !== 'www') {
                temp = value
                console.log(temp)
            }
            if (temp === '' && index === 1) {
                console.log("rewrite")
                temp = value
            }                      
        })
        return temp;
    }
    if (url[0]!=='h') {
        return trimWww(url)
    } else {   
        return url.split('/').reduce((acc, curr, i) => {
            if (i === 2) {
                acc = trimWww(curr)
            }
            return acc
        }, '')
    }
}

// domainName("http://github.com/carbonfive/raygun")
console.log(domainName("http://google.com"))
// domainName("http://www.zombie-bites.com")
// domainName("https://www.cnet.com")

function score(dice) {
    let rules = {
        1: { count: 0, prize: { points: 1000, have: false, other: true } },
        6: { count: 0, prize: { points: 600, have: false } },
        5: { count: 0, prize: { points: 500, have: false, other: true } },
        4: { count: 0, prize: { points: 400, have: false } },
        3: { count: 0, prize: { points: 300, have: false } },
        2: { count: 0, prize: { points: 200, have: false } },
    }

    dice.forEach(element => {
        rules[element].count += 1
    });

    function checkOthers(diceNum) {
        const points = diceNum == 1 ? 100 : 50
        rules[diceNum].count >= 3
            ? rules[diceNum].prize.other = points * (rules[diceNum].count - 3)
            : rules[diceNum].prize.other = points * rules[diceNum].count
    }

    function checkMainPrize(diceNum) {
        rules[diceNum].count >= 3 ? rules[diceNum].prize.have = true : rules[diceNum].prize.have = false
    }

    return Object.keys(rules).reduce((acc, curr) => {
        checkMainPrize(curr)
        if (rules[curr].prize.have) {
            acc += rules[curr].prize.points
        }
        if (rules[curr].prize.other) {
            checkOthers(curr)
            acc += rules[curr].prize.other
        }

        return acc;
    }, 0)
}

console.log(score([ 1, 1, 1, 3, 3 ]))

// [4, 4, 4, 3, 3]