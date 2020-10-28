"use strict";


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
    firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
    firstRating = prompt('На сколько оцените его?', ''),
    secondFilm = prompt('Один из последних просмотренных фильмов?', ''),
    secondRating = prompt('На сколько оцените его?', '');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

personalMovieDB.movies[firstFilm] = firstRating;
personalMovieDB.movies[secondFilm] = secondRating;

console.log(personalMovieDB);




