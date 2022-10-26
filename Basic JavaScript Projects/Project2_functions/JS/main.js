function buttonPressed() {
    document.getElementById("text-line").innerHTML = "You pressed the button!" // Displays text on paragraph element
}

function concatenateString() {
    var sentence = "This is a sentence" // Sets the sentence variable
    sentence += " with a concatenated string!" // Adds concatenated string to sentence
    document.getElementById("concatenated").innerHTML = sentence // Displays sentence on paragraph element
}