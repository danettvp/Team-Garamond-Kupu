const correctSequence = ['Pā', 'ta', 'ra'];
let step = 0;

const feedback = document.getElementById('feedback');

document.querySelectorAll('.syllable').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === correctSequence[step]) {
      button.classList.add('selected');
      step++;
      feedback.textContent = '';
      feedback.className = 'feedback';
      if (step === correctSequence.length) {
        feedback.textContent = 'Correct! You spelled Pātara!';
        feedback.className = 'feedback success';
        step = 0;
        document.querySelectorAll('.syllable').forEach(btn => btn.classList.remove('selected'));
      }
    } else {
      feedback.textContent = 'Try again!';
      feedback.className = 'feedback error';
      step = 0;
      document.querySelectorAll('.syllable').forEach(btn => btn.classList.remove('selected'));
    }
  });
});


/* MEMORY MATCH GAME */

var cards = document.querySelectorAll('.card');
var flippedCards = [];
var matchedPairs = 0; // keep count of matches
var totalPairs = 5;   // update if more cards are added

function flipCard() {
  // don't flip if card is already flipped
  if (this.classList.contains('flipped')) {
    return;
  }
  
  // flip card
  this.classList.add('flipped');
  flippedCards.push(this);
  
  //when 2 cards are flipped, check match
  if (flippedCards.length == 2) {
    var card1 = flippedCards[0];
    var card2 = flippedCards[1];
    
    // Get the text from both cards
    var card1Text = card1.querySelector('.back').textContent;
    var card2Text = card2.querySelector('.back').textContent;
    
    // Check if cards match
    var isMatch = false;
    
    //match 1
    if (card1Text == 'The bottle is big.' && card2Text == 'He nui te pātara.') {
      isMatch = true;
    }
    
    if (card1Text == 'He nui te pātara.' && card2Text == 'The bottle is big.') {
      isMatch = true;
    }
    
    //match 2
    if (card1Text == 'The bottle is on top.' && card2Text == 'Kei runga te pātara.') {
      isMatch = true;
    }
    if (card1Text == 'Kei runga te pātara.' && card2Text == 'The bottle is on top.') {
      isMatch = true;
    }
    
    //match 3
    if (card1Text == 'This is a bottle.' && card2Text == 'He pātara tēnei.') {
      isMatch = true;
    }
    if (card1Text == 'He pātara tēnei.' && card2Text == 'This is a bottle.') {
      isMatch = true;
    }
    
    //match 4
    if (card1Text == 'The bottle is underneath.' && card2Text == 'Kei raro te pātara.') {
      isMatch = true;
    }
    if (card1Text == 'Kei raro te pātara.' && card2Text == 'The bottle is underneath.') {
      isMatch = true;
    }
    
    //match 5
    if (card1Text == 'The bottle is small.' && card2Text == 'He iti te pātara.') {
      isMatch = true;
    }
    if (card1Text == 'He iti te pātara.' && card2Text == 'The bottle is small.') {
      isMatch = true;
    }
    
    if (isMatch) {
      matchedPairs++; 
      flippedCards = []; //cards match and array is reset
      //message when all cards are flipped
      if (matchedPairs === totalPairs) {
        alert("🎉 Well done! You matched them all!");
      }
    } else {
      //cards don't match,wait then flip back
      setTimeout(function() {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 1000);
    }
  }
}

//add click event to each card
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', flipCard);
}