//code learnt through freeCodeCamp.org video on YouTube for Memory Game
var cards = document.querySelectorAll('.team-card');

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

   this.classList.add('flip');

   if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  
  return} 
  
    //second click
    secondCard = this;
  
    checkForMatch();
  
}

//match

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();

}

function unflipCards() {
  lockBoard = true;
  //not match
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);

}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//function to shuffle cards immediatley invoked 
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));

