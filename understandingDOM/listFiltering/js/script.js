/**Script to search through the list
 * 
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