'use strict';


function scramble(str1, str2) {
    console.log(str1, str2)

    let forCheck = '';
    let res = ''


    for (let i = 0; i < str2.length; i++) {
        forCheck+='-'
        for (let j = 0; j < str1.length; j++) {
            if (str2[i] === str1[j]) {
                str1[j] = '';
                break;
            }            
        }      
    }

    return forCheck === res ? true : false
}


console.log(scramble('katas','steak'))

