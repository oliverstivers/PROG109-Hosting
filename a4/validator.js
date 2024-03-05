function isValid() {
    if (firstName() && lastName() && email() && phone() && username() && password() && address() && city() && state() && country() && zip()
    )
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName() {
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
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
function lastName() {
    //1) Create variable
    var validLastname = false;
    //2) read value from HTML
    var lastName = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastName === "null" || lastName === "" || lastName.length > 20) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
    } else if (lastName.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("First name invalid — bad characters")
    } else {
        validLastname = true;
        console.log("Last name valid")
    };
    //4) Send error message to HMTL
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
}

function email() {
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var errorMessages = "";
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        // send error message. For example:  
        errorMessages += "<p>Invalid email</p>";
        document.getElementById("lname").innerHTML = errorMessages;

    }
    else {
        return true; //Or assign the value to a variable. For example validEmail = true
    }

}

function phone() {
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";
    if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
        errorMessages += "<p>Invalid phone number</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function username() {
    var username = document.getElementById("Username").value;
    var errorMessages = "";
    if (username === null || username === "" || username.length > 12) {
        errorMessages += "<p>Invalid username</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function password() {
    var password = document.getElementById("Password").value;
    var errorMessages = "";
    if (password === null || password === "" || password.length > 7) {
        errorMessages += "<p>Invalid password</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function address() {
    var address = document.getElementById("Address").value;
    var errorMessages = "";
    if (address === null || address === "" || address.length > 50) {
        errorMessages += "<p>Invalid address</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function city() {
    var city = document.getElementById("City").value;
    var errorMessages = "";
    if (city === null || city === "" || city.length > 20) {
        errorMessages += "<p>Invalid city</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function state() {
    var state = document.getElementById("State").value;
    var errorMessages = "";
    if (state === null || state === "" || state.length > 2) {
        errorMessages += "<p>Invalid state</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function country() {
    var country = document.getElementById("Country").value;
    var errorMessages = "";
    if (country === null || country === "" || country.length > 20) {
        errorMessages += "<p>Invalid country</p>";
        document.getElementById("lname").innerHTML = errorMessages;
    }

    else
        return true;
}

function zip(){
    var country = document.getElementById("Country").value;
    var zip = document.getElementById("Zip").value;
    var errorMessages = "";

    if(country == "US"){
        if (zip === null || zip === "" || zip.length > 5) {
            errorMessages += "<p>Invalid zip code</p>";
            document.getElementById("lname").innerHTML = errorMessages;
        }
        else{
            return true;
        }
    }
    else{
        return true;
    }
}