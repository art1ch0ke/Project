'use strict'
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;
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

if (personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
} else {
        alert('Произошла ошибка');
}

console.log(personalMovieDB.movies);