"use strict";





// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// }



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    checkUserMovies() {
        for (let i = 0; i < 2; i++) {
            let nameFilm = prompt('Один из последних просмотренных фильмов?');
            let nameRating = +prompt('На сколько оцените его?');

            if (nameFilm != null && nameRating != null && nameFilm != '' && nameRating != '' && nameFilm.length < 50) {
                this.movies[nameFilm] = nameRating;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    userLevel() {
        if ((this.count) < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if ((this.count) >= 10 && (this.count) <= 30) {
            console.log("Вы классический зритель");
        } else if ((this.count) > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres() {
        for (let i = 1; i < 2; i++) {
            let userGenre = prompt(`Ваш любимый жанр под номером через запятую`);

            // if (userGenre == null || userGenre == '') {
            //     console.log('Вы ввели не коректные данные');
            //     i--;
            // } else {
            //     this.genres.push(userGenre);
            // }
            if (userGenre === null || userGenre == '') {
                console.log('Вы ввели не коректные данные');
                i--;
            } else {
                this.genres = userGenre.split(', ');
                this.genres.sort();
            }

        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDb() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};



// function checkUserMovies() {
//     for (let i = 0; i < 2; i++) {
//         let nameFilm = prompt('Один из последних просмотренных фильмов?');
//         let nameRating = +prompt('На сколько оцените его?');

//         if (nameFilm != null && nameRating != null && nameFilm != '' && nameRating != '' && nameFilm.length < 50) {
//             personalMovieDB.movies[nameFilm] = nameRating;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }




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



// function userLevel() {
//     if ((personalMovieDB.count) < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if ((personalMovieDB.count) >= 10 && (personalMovieDB.count) <= 30) {
//         console.log("Вы классический зритель");
//     } else if ((personalMovieDB.count) > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }



// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
//     }
// }

personalMovieDB.start();
personalMovieDB.checkUserMovies();
personalMovieDB.writeYourGenres();
personalMovieDB.userLevel();
// personalMovieDB.toggleVisibleMyDb();
personalMovieDB.showMyDB(personalMovieDB.privat);
