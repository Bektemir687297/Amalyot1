" use strict";

let numberOfNews;

function startProject() {
  numberOfNews = +prompt("Siz qancha yangliki ko'rdingiz?");

  while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
    numberOfNews = +prompt("Siz qancha yangliki ko'rdingiz?");
  }
}
startProject();

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNews() {
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
}

rememberNews();

function showPesonalLevel() {
  if (personalNewsDB.count < 10) {
    console.log("Judda kam sonli yangiliklar o'qilibdi");
  } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
    console.log("Siz klassik tamoshabinsiz");
  } else if (personalNewsDB.count >= 30) {
    console.log("Siz yangiliklar ishqibozi ekansiz");
  } else {
    console.log("Xato yuz berdi");
  }
}

showPesonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalNewsDB);
  }
}

showMyDB(personalNewsDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalNewsDB.genres[i - 1] = prompt(
      `Sizning sevimli janringiz no'miri ${i}`
    );
  }
}
writeYourGenres();
