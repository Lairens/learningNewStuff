/** This script is used in conjunction with a html document index.html
 * which is located in the root folder of this project ../index.html
 * This script also needs access to a css document style.css in the css
 * folder located at the root of the project ../css/style.css
 * 
 * This script's function is to show/hide translations on the flashcards
 * present in the index.html file, to add custom cards please look at the
 * html file.
*/

// Creating and array of our Html cards
let cards = document.getElementsByClassName('card');

/** LOGIC BEGIN **/

// Looping through the array of cards
for (let cardIndex in cards) {

    // Array used as storage for all the card's buttons
    let button = cards[cardIndex].querySelector('.card-button');

    // Listenning for a click event on any button of the flashcards
    button.addEventListener('click', function(event){
        // Targeting the specific button which was clicked
        let currentButton = event.target;
        // Parent card of the button
        let currentCard = currentButton.parentNode;
        // Using the parent card to target the answer linked to the card
        let currentAnswer = currentCard.querySelector('.card-answer');

        // Hiding the answer if shown
        if (currentButton.innerHTML == 'Show') {
            currentAnswer.style.display = 'Block';
            currentButton.innerHTML = 'Hide';
        }
        // Showing the answer if hidden 
        else if (currentButton.innerHTML == 'Hide') {
            currentAnswer.style.display = 'None';
            currentButton.innerHTML = 'Show';
        }
    })
}

/** LOGIC END **/


// CODE USED TO TEST THE LOGIC

/*var firstButton = document.getElementsByClassName('card-button')[0];
var firstAnswer = document.getElementsByClassName('card-answer')[0];


firstButton.addEventListener('click', function(event){
    if (firstButton.innerHTML == 'Show') {
        firstAnswer.style.display = 'Block';
        firstButton.innerHTML = 'Hide';
    } else if (firstButton.innerHTML == 'Hide') {
        firstAnswer.style.display = 'None';
        firstButton.innerHTML = 'Show';
    }
});*/