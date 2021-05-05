'use strict';

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

