/*
 * Create a list that holds all of your cards
 */

var cardList2 = ["fa-diamond","fa-diamond","fa-diamond","fa-diamond","fa-paper","fa-paper","fa-anchor","fa-anchor","fa-bolt","fa-bolt","fa-cube","fa-cube","fa-leaf","fa-leaf","fa-bicycle","fa-bicycle","fa-bomb","fa-bomb"];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
var displayCards = document.querySelector(".testCardDisplay");
/*displayCards.appendChild(cardList)*/

function createNewCardList(cardlist){
  
  var ulCreation = document.createElement('ul');
    ulCreation.className = "";
  
for(i=0; i < cardlist.length; i++ ){  
  var liCreation = document.createElement('li');
  liCreation.className = "card";
  /*liCreation.innerHTML = cardlist[i];  oldWorkingVersion*/
  /*liCreation.innerHTML = <i class="fa cardlist[i]"></i>;*/
    var iCreation = document.createElement('i');
    iCreation.className = "fa ";
    iCreation.className += cardlist[i];
    liCreation.append(iCreation);
    
    ulCreation.append(liCreation);
    ulCreation.className = "deck";
    }
  
  /*var ulDock = document.getElementsByClassName("testCardDisplay");*/
  var ulDock = document.getElementById("testCard69");
  ulDock.parentNode.replaceChild(ulCreation, ulDock);
  
};


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleAlert() {
    setTimeout(function(){ alert("Cards have been reshuffled"); }, 0);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*document.getbbbbbbbElementsByClassName("fa").addEventListener("click",checkStatus);*/
var clickedCard = document.getElementsByClassName("card");
console.log(clickedCard.length+"pre")

var currentCard ;

function displayCard( currentCard){
  currentCard.className += " open show";;
};

for( let i=0; i < clickedCard.length; i++){
  /*clickedCard[i].className += " open show";
  console.log(clickedCard[i]);     for testing-it worksj*/   
  clickedCard[i].addEventListener("click", function() {
      console.log(i);
      displayCard(clickedCard[i]);
      

  });
};


