" use strict";

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
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalNewsDB.news[a] = b;
    console.log("tayor");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalNewsDB.count < 10) {
  console.log("Judda kam sonli yangiliklar o'qilibdi");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
  console.log("Siz klassik tamoshabinsiz");
} else if (personalNewsDB.count >= 30) {
  console.log("Siz yangiliklar ishqibozi ekansiz");
} else {
  console.log("Xato yuz berdi");
}

console.log(personalNewsDB);
