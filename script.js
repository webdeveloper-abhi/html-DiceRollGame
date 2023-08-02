"use strict";

const header = document.querySelector("h1");
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const button = document.querySelector("button");

const game = function () {
  $("button").fadeOut(150).fadeIn(150);
  const random1 = Math.trunc(Math.random() * 4 + 1);
  const random2 = Math.trunc(Math.random() * 4 + 1);

  const sound = $(".sound").get(0);
  sound.play();
  dice1.src = `dice${random1}.png`;
  $(".img1").fadeOut(150).fadeIn(150);

  dice2.src = `dice${random2}.png`;
  $(".img2").fadeOut(150).fadeIn(150);

  if (random1 === random2) {
    header.textContent = "Draw";
  } else if (random1 > random2) {
    header.textContent = "Player 1 Wins";
  } else {
    header.textContent = "Player 2 Wins";
  }
};
game();

button.addEventListener("click", game);
