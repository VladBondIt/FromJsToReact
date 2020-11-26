'use strict';

const a = {
    data: [
        { label: "sick", id: "adsad" },
        { label: "lick", id: "adsdad" },
        { label: "mick", id: "adaszxd" },
        { label: "dick", id: "adsvzxc" }
    ]
}

const { data: [, , { id }] } = a;

console.log(id);
const newA = a.data.filter(x => x.id !== id ? x : null).map(x => x);

console.log(newA);
console.log(a.data);