"use strict";

// Promise обещания,имеет четкую цепочку действий зависящую от предыдущих результатов,
// технология позволяющая работать с асинхронными операциями,
// (бекэнд и сетТаймауты-Интервалы).

// console.log('Запрос данных...');

// Создаем обещание, помещая в переменную req,
// когда создается обещание нужно предпологать что оно сбудется или нет(resolve, reject)
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000,
//         };

//         // Возвращаем данные через функцию резолв, объект product. 
//         resolve(product);

//     }, 2000);

// });

// Обработка положительного результата - это функция резолв
// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });
// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             // Продукт передаем в then
//             resolve(product);
//         }, 2000);
//     });

//     req2.then(data => {
//         console.log(data);
//     });
// });

// Цепочка удачных промисов
// req.then((product) => {
//     // Сразу возвращаем промис без создания переменной, который может быть удачным или нет
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             // Продукт передаем в then
//             resolve(product);
//             // test reject
//             // reject(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
//     // Catch, отлов ошибки, прописывается после описания удачных промисов,
//     // если проиходит ошибка, пропускаем все блоки then-resolve,
//     // и сразу выполняем catch
// }).catch(() => {
//     console.error('error');
//     // Finally дефолтное действие которое выполняем при любом исходе промиса
//     // прописывается всегда в конце цепочки если нужен.
// }).finally(() => {
//     console.log('Ну наконец-то!');
// });


// Callback hell, promise призван предотвратить такие разрастания цепочек вызовов.
// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 2000,
//     };
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);

const test = function (time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Используем промис как глобол объект
// Метод алл принимает в себя массив с промисами и синхронизирует их выполнение
// Можно обработать метод all then-resolve`ом
// Определяем все ли наши промисы завершились успехом
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

// Метод race отлавливает выполнение первого переданого промиса
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
});
