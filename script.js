" use strict";

const personalNewsDB = {
  count: 0,
  news: {},
  actors: {},
  genres: [],
  privat: false,
  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangliki ko'rdingiz?");

    while (
      personalNewsDB.count == "" ||
      personalNewsDB.count == null ||
      isNaN(personalNewsDB.count)
    ) {
      personalNewsDB.count = +prompt("Siz qancha yangliki ko'rdingiz?");
    }
  },
  rememberNews: function () {
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
  },
  showPesonalLevel: function () {
    if (personalNewsDB.count < 10) {
      console.log("Judda kam sonli yangiliklar o'qilibdi");
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
      console.log("Siz klassik tamoshabinsiz");
    } else if (personalNewsDB.count >= 30) {
      console.log("Siz yangiliklar ishqibozi ekansiz");
    } else {
      console.log("Xato yuz berdi");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalNewsDB.privat) {
      personalNewsDB.privat = false;
    } else {
      personalNewsDB.privat = true;
    }
  },
  writeYourGenres: function () {
    /*for (let i = 1; i < 2; i++) {
      let genre = prompt(`Sizning sevimli janringiz: no'mir ${i}`);
      if (genre === "" || genre === null) {
        console.log("Siz noto'g'ri malumot kiritingiz");
        i--;
      } else {
        personalNewsDB.genres[i - 1] = genre;
      }
    }*/

    for (let i = 1; i < 2; i++) {
      let genre = prompt(
        `Sizning sevimli janringizni, vergul bilan ajratib yozingi`
      ).toLowerCase();

      if (genre === "" || genre === null) {
        console.log("siz noto'g'ri malumot kiritingiz");
        i--;
      } else {
        personalNewsDB.genres = genre.split(", ");
        personalNewsDB.genres.sort();
      }
    }

    personalNewsDB.genres.forEach((item, i) => {
      console.log(`Sizning sevimli janringiz: no'mir ${i + 1} bu ${item}`);
    });
  },
};
