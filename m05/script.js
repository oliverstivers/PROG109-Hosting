var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message


let table = prompt('Enter a number to see its multiplication table');

while (isNaN(table)) {
    table = prompt('Please enter a valid number');
}

if (operator === 'addition') {
    // Do addition
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        i++;
    }
} else {
    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;