'use strict';



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