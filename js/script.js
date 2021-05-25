 // ЗАДАЧА 1.1

let numberOfFilms;

// ЗАДАЧА 1.2

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", 100);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", 100);
    }
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

// ЗАДАЧА 2.1

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
    
        const a = prompt("Один из просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
   
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    
}
};
rememberMyFilms();

function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
    console.log("MALO FILMOV");
} else if (personalMovieDB > 10 && personalMovieDB < 30) {
    console.log("NORM FILMOV");
} else {
    console.log("KINOMAN");
}

};


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    };
};

showMyDB(personalMovieDB);


function writeYourGenres () {
    for (let i = 1; i <=3 ; i++) {
     personalMovieDB.genders[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    };
};

writeYourGenres();
console.log(personalMovieDB);