
// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {

    leftSide(pHeight, pColorEven, pColorOdd, pSymbol);
    rightSide(pHeight, pColorEven, pColorOdd, pSymbol);


}

function leftSide(pHeight, pColorEven, pColorOdd, pSymbol) {
    var combinedHTML = "";

    // Generate upper left corner
    for (i = 0; i < pHeight; i++) {
        combinedHTML += "<p>";
        // Create spaces before symbols
        for (k = 0; k < pHeight - i - 1; k++) {
            combinedHTML += "&nbsp;&nbsp;&nbsp;"; // Add an additional space
        }
        // Create each line on the Rhombus
        for (j = 0; j <= i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2)
                // even
                combinedHTML += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                // odd
                combinedHTML += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        combinedHTML += "</p>";
    }

    // Generate lower left corner
    for (i = pHeight; i > 0; i--) {
        combinedHTML += "<p>";
        // Create spaces before symbols
        for (k = 0; k < pHeight - i; k++) {
            combinedHTML += "&nbsp;&nbsp;&nbsp;"; // Add an additional space
        }
        // Create each line on the Rhombus
        for (j = 0; j < i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2)
                // even
                combinedHTML += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                // odd
                combinedHTML += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        combinedHTML += "</p>";
    }

    document.getElementById("leftSide").innerHTML = combinedHTML;
}



function rightSide(pHeight, pColorEven, pColorOdd, pSymbol) {
    var combinedHTML = "";

    // Generate upper left corner
    for (i = 0; i < pHeight; i++) {
        combinedHTML += "<p>";
        // Create spaces before symbols
        
        // Create each line on the Rhombus
        for (j = 0; j <= i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2)
                // even
                combinedHTML += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                // odd
                combinedHTML += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        combinedHTML += "</p>";
    }

    // Generate upper right corner (mirror of left side)
    for (i = 0; i < pHeight; i++) {
        combinedHTML += "<p>";
        for (j = 0; j < pHeight - i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2)
                // even
                combinedHTML += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                // odd
                combinedHTML += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        combinedHTML += "</p>";
    }

    document.getElementById("rightSide").innerHTML = combinedHTML;
}



