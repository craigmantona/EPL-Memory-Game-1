//code learnt through freeCodeCamp.org video on YouTube for Memory Game
const cards = document.querySelectorAll('.team-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
}

if (!hasFlippedCard) {
  //first click
  hasFlippedCard = true;
  firstCard = this;
} else {
  //second click
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.team === secondCard.dataset.team;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

}

function unflipCards() {
  //not match
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);

}

cards.forEach(card => card.addEventListener('click', flipCard));