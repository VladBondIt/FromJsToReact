'use strict';


function cloneDeep(obj) {
    let temp;
    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj) {

        return obj;
    }

    if (obj instanceof Date) {
        temp = new obj.constructor();

    } else {

        temp = obj.constructor();
    }

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj.isActiveClone = null;
            temp[key] = cloneDeep(obj[key]);
            delete obj.isActiveClone;
        }
    }
    return temp;
}


const obj = {
    a: 5,
    b: null,
    c: {
        z: 20
    },
    x: new Date(),
    d: [10, 15, 12],
    e: [
        { h: 'Hello', m: 'email' },
        { h: 'Hello', m: 'email' }
    ]
};

// const clone = deepClone(obj);
const clone = cloneDeep(obj);
// const clone = JSON.parse(JSON.stringify(obj));

obj.e[0].h = 'Hello world';

console.log(obj);
console.log(obj.x.getFullYear());
console.log(clone.x.getFullYear());
console.log(clone);