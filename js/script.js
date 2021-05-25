// ЗАДАЧА 1
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", 100);
console.log(numberOfFilms);

// ЗАДАЧА 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

// ЗАДАЧА 3

const a = prompt("Один из просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

