"use strict";


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

for (let i = 0; i < 2; i++) {
    let nameFilm = prompt('Один из последних просмотренных фильмов?');
    let nameRating = prompt('На сколько оцените его?');

    if (nameFilm != null && nameRating != null && nameFilm != '' && nameRating != '' && nameFilm.length < 50) {
        personalMovieDB.movies[nameFilm] = nameRating;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
// let i = 0;
// do {
//     let nameFilm = prompt('Один из последних просмотренных фильмов?');
//     let nameRating = prompt('На сколько оцените его?');
//     personalMovieDB.movies[nameFilm] = nameRating;
//     i++;
//     if (nameFilm != null && nameRating != null && nameFilm != '' && nameRating != '' && nameFilm.length < 50) {
//         personalMovieDB.movies[nameFilm] = nameRating;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);

// while (i < 2) {
//     let nameFilm = prompt('Один из последних просмотренных фильмов?');
//     let nameRating = prompt('На сколько оцените его?');
//     personalMovieDB.movies[nameFilm] = nameRating;
//     i++;
//     if (nameFilm != null && nameRating != null && nameFilm != '' && nameRating != '' && nameFilm.length < 50) {
//         personalMovieDB.movies[nameFilm] = nameRating;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


console.log(personalMovieDB);

if ((+personalMovieDB.count) < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if ((+personalMovieDB.count) >= 10 && (+personalMovieDB.count) <= 30) {
    console.log("Вы классический зритель");
} else if ((+personalMovieDB.count) > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}