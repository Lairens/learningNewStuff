/*
var class1 = document.getElementsByClassName('class1');
var button1 = document.getElementById('button1');
var divs = document.getElementsByTagName('DIV');
var first = document.querySelector('.class1');
var all = document.querySelectorAll('.class1');
*/
// Five basic ways to retrieve elements in the HMTL page
// Can nest each inside any, depending on the variable used,
// useful to get a more precise search.

//--------------------------------------------------------------//


/*DOM Lesson #4 Responsive CSS*/

//var div1 = document.getElementById('div1');
//var div1Class = div1.getAttribute('class');
//var div1Html = div1.innerHTML;
//var noValueDiv1Color = div1.style.backgroundColor;

//alert(window.getComputedStyle(div1).backgroundColor);

//div1.setAttribute('class', 'class2'); // Not recommended but can be done

//div1.innerHTML = 'Goodbye'; // Overrides everything inside the element
//alert();

//div1.style.backgroundColor = '#0000ff';
//div1.setAttribute('style', 'height: 100px'); // replace the entire css style for that element/s

//--------------------------------------------------------------//

/* ADDING REMOVING ELEMENTS #5 */
/*
var div1 = document.getElementById('div1');
var newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello there!';

div1.appendChild(newDiv); // Append a new element (add to the end)

document.body.removeChild(div1);
*/

//--------------------------------------------------------------//

/* ADDING EVENT LISTENERS #6 */
/*
document.addEventListener('DOMContentLoaded', function(event){
  alert('page loaded');
});
document.getElementById('div1').addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = '#0000ff';
});

var button1 = document.getElementById('button1');

button1.addEventListener('click', function(event) {
    target = event.target;
    alert(target.innerHTML);
});
*/

//-------------------------------------------------------------//

/* CLIENT SIDE FORM  #7 */

var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var textInput = form.elements[0];
    alert(textInput.value);
});