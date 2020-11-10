"use strict";


// Свойства объектов акцессоры
// Гетторы позваляют получать значение свойства, Сетторы устанавливтаь

const person = {
    name: 'ALex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};
// При вызове гетторов и сетторов не ставятся круглые скобки 
console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);