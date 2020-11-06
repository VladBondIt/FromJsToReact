"use strict";


//  JSON формат обменна и хранения данных.
// Все строки должны быть в двойных ковычках и могут содержать любой тип данных.

// const person = {
//     name: "Alex",
//     tel: "+74445554444"
// };

// Для отправки преобразовываем в данные понятные серверу.

// console.log(JSON.stringify(person));

// Для принятия данных с сервера парсим их в объекты.

// Причины популярности малый вес файла и читабельность.

// console.log(JSON.parse(JSON.stringify(person)));

// Старый формат общения клиент-сервер XMLHttpRequest,
//  не удобный и много весит 

const person = {
    name: "Alex",
    tel: "+74445554444",
    parents: {
        mother: "Elena",
        father: "Mike"
    }
};

// Глубокая копия объекта

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mother = 'Ann';
console.log(person);
console.log(clone);

