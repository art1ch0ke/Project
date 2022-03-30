'use strict'

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (personalMovieDB.count == '' ||personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenries: function() {
        for(let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null 
            || isNaN(personalMovieDB.genres[i]) == false) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            }
            personalMovieDB['genres'].forEach(function(genre, i, genres) {
                console.log(`Любимый жанр #${i + 1} — это ${genre}`);
            });
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
                alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
                alert('Вы киноман');
        } else {
                alert('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start(); 
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenries();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
// console.log(personalMovieDB.movies);