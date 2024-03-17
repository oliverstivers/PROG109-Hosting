function isValid() {
    if (firstname() && email() && comments())
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    console.log("Form invalid")
    return false;
}

FirstName.addEventListener('blur', firstname, false);
function firstname() {
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = document.getElementById("name").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname === "null" || firstname === "" || firstname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
    } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("First name invalid — bad characters")
    } else {
        validFirstname = true;
        console.log("First name valid")
    };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

function email() {
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages = "";
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        // send error message. For example:  
        errorMessages += "<p>Invalid email</p>";
        document.getElementById("fname").innerHTML = errorMessages;

    }
    else {
        return true; //Or assign the value to a variable. For example validEmail = true
    }

}

function comments() {
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = document.getElementById("comment").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname === "null" || firstname === "") {
        errorMessages += "<p>No comments</p>";
        console.log("First name invalid — length")
    } else {
        validFirstname = true;
        console.log("First name valid")
    };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};
