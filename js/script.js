'use strict';
 // ЗАДАЧА 1.1

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genders: [],
    privat: true,
    start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", 100);

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", 100);
    }
    },
    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
    
        const a = prompt("Один из просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
   
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
    
}
    },
    detectPersonalLvl: function () {
    if (personalMovieDB.count < 10) {
    console.log("MALO FILMOV");
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log("NORM FILMOV");
} else if (personalMovieDB.count >= 30) {
        console.log("KINOMAN");
        
    } else {
        console.log('ERROR');
}

    },
    showMyDB: function (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    },
     toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else  {
            personalMovieDB.privat = true;
        }
        
    },
    writeYourGenres: function () {
    for (let i = 1; i < 2 ; i++) {
     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    
        if (genre === '' || genre === null) {
            console.log('NEPRAVILNO VVELI DANNUE');
            i--;
        } else {
            personalMovieDB.genders[i - 1] = genre;
    }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
   
};

console.log(personalMovieDB);


