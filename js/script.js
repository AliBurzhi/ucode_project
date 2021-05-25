 // ЗАДАЧА 1.1
 const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", 100);
console.log(numberOfFilms);

// ЗАДАЧА 1.2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

// ЗАДАЧА 1.3


// ЗАДАЧА 2.1

for (let i = 0; i < 2; i++) {
    
        const a = prompt("Один из просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
   
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    
}
if (personalMovieDB.count < 10) {
    console.log("MALO FILMOV");
} else if (personalMovieDB > 10 && personalMovieDB < 30) {
    console.log("NORM FILMOV");
} else {
    console.log("KINOMAN");
};

console.log(personalMovieDB);
