/*
  a list that holds all of your cards
 */
"use strict";
var cards = [...document.querySelectorAll(".card")];
/*deck:to store reference to deck*/
var deck = document.querySelector(".deck");
/*i to index the cards in cards array
min and sec used to display time*/
var i = 0,
  min = 0,
  sec = 0;
/*flag is used to know first press of game*/
var flag = false;
/*reference to modal box(pop up message at end of game)*/
var mbox = document.querySelector(".modal");
/*reference to close button in popup*/
var close = document.querySelector(".close");
/*count for number of comparisions,matches for successful matches and star count for stars*/
var count = 0,
  matches = 0,
  starcount = 3;
/*restart button reference*/
var restart = document.querySelector(".restart");
/*audio reference*/
  var audio = new Audio('./audio/click.mp3');
  var successaudio = new Audio('./audio/alcatel-success.mp3');
/*list of cards opened*/
var opencards = [];
while (i < cards.length) {
  cards[i].addEventListener("click", click);
  i++;
}
document.querySelector(".button-class").addEventListener("click", () => {
  window.location.reload(true);
})
/*
restarting game when we click restart button*/
restart.addEventListener("click", () => {
  window.location.reload(true);
});

/*shufflingcards using map function*/
shuffle(cards).map(() => {
  [].forEach.call(cards, list => {
    deck.appendChild(list);
  });
})
/*closing the popup on clicking close button*/
close.onclick = function() {
  mbox.style.display = "none";
}
/*work done on clicking each card*/
function click() {
audio.play();
  if (flag == false) {
    timer();
    flag = true;
  }
  /*adding classes that are clicked*/
  this.classList.add("open", "show", "counter");
  opencards.push(this);
  if (opencards.length == 2) {
    setTimeout(compare,200);
    starCounter();
  }
}
/*counting the star rating of the game*/
function starCounter() {
  if (count > 15 && count <= 20) {
    document.querySelector(".stars").children[2].children[0].className = "fa fa-star-o";
    starcount = 2;
  }
  if (count > 20) {
    document.querySelector(".stars").children[1].children[0].className = "fa fa-star-o";
    starCounter = 1;
  }
}
/*function to display time */
function timer() {
  var myVar = setInterval(function() {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (matches == 8) {
      mbox.style.display = "block";
      console.log(matches);
      /*stopping time at the end of game*/
      clearInterval(myVar);
      popup();
    }
    document.querySelector(".time").innerHTML = min + ":" + sec;
  }, 1000);
}
/*adjusting content in popup message after popup is activated*/
function popup() {
  document.querySelector(".total-time").innerHTML = min + ":" + sec;
  document.querySelector(".star1").className = "fa fa-star";
  if (starcount > 1) {
    document.querySelector(".star2").className = "fa fa-star";
    if (starcount > 2) {
      document.querySelector(".star3").className = "fa fa-star";
    }
  }
  document.querySelector(".final-moves").innerHTML = "Moves:" + count;
}
/*comparing to find  successful matching*/
function compare() {
  if (opencards[0].children[0].className == opencards[1].children[0].className) {
    opencards[0].classList.add("match");
    opencards[1].classList.add("match");
    matches++;
    /*playing audio when cards matches*/
    successaudio.play();
  }
  opencards[0].classList.remove("open", "show", "counter");
  opencards[1].classList.remove("open", "show", "counter");
  opencards.length = 0;
  document.querySelector(".moves").innerHTML = ++count;
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
