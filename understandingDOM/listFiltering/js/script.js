/**Script to search through the list
 * It is still a barebones version
 * Planning on adding a non-case sensitive version of the search bar first,
 * then adding a functionality that still displays results based on letters
 * entered, even in a wrong order, as long as characters in the search bar
 * match the characters present in the strings of the adventureList[]
 */
let adventureList = [];

let adventures = document.getElementsByClassName('adventure');

//Loop to create an array of strings containing the adventure's name
for (let adventuresIndex in adventures) {
    adventureList.push(adventures[adventuresIndex].innerHTML);
}
//This loop creates 3 undefined objects at the end of the adventureList[]
//What causes this ?

//Fetching the search bar in the document
let searchBar = document.getElementById('search-bar');

//Recording what keys are pressed and released with the seach bar active
searchBar.addEventListener('keyup', function(event) {
    let text = searchBar.value;
    for (let adventuresIndex2 in adventureList){
        if(adventureList[adventuresIndex2].indexOf(text) < 0) {
            adventures[adventuresIndex2].style.display = 'None';
        } else {
            adventures[adventuresIndex2].style.display = 'Block';
        }
    }
});