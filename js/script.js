"use strict";

// Promise обещания,имеет четкую цепочку действий зависящую от предыдущих результатов,
// технология позволяющая работать с асинхронными операциями,
// (бекэнд и сетТаймауты-Интервалы).

console.log('Запрос данных...');

// Создаем обещание, помещая в переменную req,
// когда создается обещание нужно предпологать что оно сбудет или нет(resolve, reject)
const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000,
        };

        // Возвращаем данные через функцию резолв, объект product. 
        resolve(product);

    }, 2000);

});

// Обработка положительного результата - это функция резолв
// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });
req.then((product) => {
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            // Продукт передаем в then
            resolve(product);
        }, 2000);
    });

    req2.then(data => {
        console.log(data);
    })
});





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

