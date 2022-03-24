const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovieTitle = prompt('Один из последних просмотренных фильмов?', 'Logan'),
      lastMovieRating = +prompt('На сколько оцените его?', '8.1');

personalMovieDB['movies'][lastMovieTitle] = lastMovieRating;

lastMovieTitle = prompt('Один из последних просмотренных фильмов?', 'No Way Home');
lastMovieRating = +prompt('На сколько оцените его?', '7.9');

personalMovieDB['movies'][lastMovieTitle] = lastMovieRating;

// console.log(personalMovieDB.movies);