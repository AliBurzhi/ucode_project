'use strict';
/* // ЗАДАЧА 1.1

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genders: [],
    privat: false,
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
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
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

        if (genre === '' || genre == null) {
            console.log('NEPRAVILNO VVELI DANNUE');
            i--;
        } else {
            personalMovieDB.genres[i - 1] = genre;
    }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

}; */

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
div.classList.add('black');


// wrapper.append(div); // 

// wrapper.prepend(div); // вставляем в начало 

// hearts[0].before(div); // точечно всталяем

// circles[0].remove(); // удаляем

// hearts[0].replaceWith(circles[0]); // заменяем один єлемент другим




