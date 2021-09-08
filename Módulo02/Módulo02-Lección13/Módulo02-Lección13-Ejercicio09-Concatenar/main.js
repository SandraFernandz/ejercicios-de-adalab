"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const whoWon = runners
  .filter((runners) => runners.student === true)
  .reduce((timeToCompare, currentTime) => {
    if (timeToCompare.time < currentTime.time) {
      return timeToCompare;
    } else {
      return currentTime;
    }
  });

console.log(whoWon);
