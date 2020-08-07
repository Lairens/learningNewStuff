/* LOGIC CONTROLLING THE FORM */


// Displaying or not displaying the pet selection dropdown menu depending on the
// checkbox pet, if checked => Display, else => do not Display
let checkbox = document.getElementById('petCheckbox');

let selectionDiv = document.getElementById('petSelection');

checkbox.addEventListener('change', function(event){
    if (checkbox.checked == true) {
        selectionDiv.style.display = 'Block';
    } else {
        selectionDiv.style.display = 'None';
    }
});


// Submitting the form, well saving it more likely,
// since it is a client side only form

let saveForm = document.getElementById('save-form');

saveForm.addEventListener('submit', function(event){
    event.preventDefault();// Not sending the form, I don't have a server to get it
    let nameText = saveForm.elements[0].value;
    let addressText = saveForm.elements[1].value;
    let ageText = saveForm.elements[2].value;
    let doesHavePets = saveForm.elements[3].checked;
    let petText = 'No pets';
    // Basic check for the text boxes
    if (nameText == ''){
        alert('Please enter a name');
        return;
    } else if (addressText == ''){
        alert('Please enter an address')
        return;
    } else if (ageText == ''){
        alert('Please enter an age')
        return;
    }
    // Don't need to alter the value of petText if no pet
    if (doesHavePets) {
        petText = saveForm.elements[4].value;
    }
    // Example of would be booking problem with the form
    if (petText == 'Dog') {
        alert('Sorry, our dog capacity is full.');
        return;
    }
    // Displaying all the info instead of saving or sending the form
    alert('Booking Saved! Info: \n' +
        nameText + '\n' + 
        addressText + '\n' + 
        ageText + '\n' +
        petText);
});

