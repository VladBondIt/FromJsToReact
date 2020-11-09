"use strict";

// Объект Lockal storeg уникален для каждого домена ~ 5mb
// информации может содержать локал сторедж.
// window.localStorage

// В глобальный объект локал сторедж запишется новый объекст с ключом number и значением 5
// если такой объект есть то он перезапишется.
// localStorage.setItem('number', 5);
// // Получение объекста из локал стореджа ключ number равен 5
// localStorage.getItem('number');
// // Удаление объекста из локал стореджа
// localStorage.removeItem('number');
// // Очистка локал стореджа
// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person);
// localStorage.setItem('Alex', serializedPerson);

// console.log(JSON.parse(localStorage.getItem('Alex')));
localStorage.setItem('Alex', person);

console.log(localStorage.getItem('Alex'));



