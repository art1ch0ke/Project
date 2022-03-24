const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovieTitle = promt('Один из последних просмотренных фильмов?', 'Logan');
const lastMovieRating = +promt('На сколько оцените его?', '8.1');

const movies = {
    lastMovieTitle: lastMovieRating
};

console.log(personalMovieDB.count);
console.log(personalMovieDB.privat);
console.log(movies);
console.log(movies['lastMovieTitle']);