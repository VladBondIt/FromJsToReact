"use strict";

// application programmming interface - набор данных и возможностей,
// которые нам проедоставляет готовое решение.

// Fetch api общение с серверами на Promise`ах встроеное в браузеры.
// https://jsonplaceholder.typicode.com/


// GET запрос получающий данные с этого url
// fetch возвращает promise
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // У fetch есть встроеный метод .json преобразования json формата
//     // он так же возврашает promise,для преобразования нужно время по этому и промис
//     .then(response => response.json())
//     // .then(response => response.text())
//     .then(json => console.log(json));


//Другие виды запросов, помещаем в фетч объект с настройками
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({ name: 'Alex' }),
    headers: {
        'Content-type': 'application/json'
    }
})
    // У fetch есть встроеный метод .json преобразования json формата
    // он так же возврашает promise,для преобразования нужно время по этому и промис
    .then(response => response.json())
    // .then(response => response.text())
    .then(json => console.log(json));
