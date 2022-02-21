"use strict";

const numberOfNews = +prompt("Siz qancha yangliki ko'rdingiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Ohirgai ko'rgan yangiliklaringizdan biri?"),
    b = prompt("Unga qancha boho bergan bo'lardingiz?");
}

personalNewsDB.news[a] = b;
console.log(personalNewsDB);
