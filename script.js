'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenries() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null || isNaN(personalMovieDB.genres[i]) == false) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        }
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovieTitle = prompt('Один из последних просмотренных фильмов?', 'Logan'),
            lastMovieRating = prompt('На сколько оцените его?', '8.1');
        if (lastMovieTitle != null && lastMovieRating != null && lastMovieTitle != '' && lastMovieTitle.length <= 50) {
                personalMovieDB['movies'][lastMovieTitle] = lastMovieRating; 
        }
        else {
            alert('Ошибка, попробуйте ещё раз!');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
    } else {
            alert('Произошла ошибка');
    }
}

start(); 
detectPersonalLevel();
rememberMyFilms();
writeYourGenries();
showMyDB();
// console.log(personalMovieDB.movies);