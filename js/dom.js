'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

box.style.backgroundColor = 'green';
box.style.width = `500px`;

btns[1].style.borderRadius = `30px`;
circles[0].style.backgroundColor = 'red';

const div = document.createElement('div'),
    wrapper = document.querySelector('.wrapperx');
// text = document.createTextNode('Here was me');

div.classList.add('black');

// wrapper.append(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0])

wrapper.insertBefore(div, hearts[1]);

div.innerHTML = `<h1>Hello world!</h1>`;

// div.insertAdjacentHTML('beforebegin', `<h2>Not hello</h2>`)
// div.insertAdjacentHTML('beforeend', `<h2>Not hello</h2>`)
// div.insertAdjacentHTML('afterbegin', `<h2>Not hello</h2>`)
// div.insertAdjacentHTML('afterend', `<h2>Not hello</h2>`)