var global = 13
function varFunction() {
    var local = 7
    console.log(global+local)
}
function repeatFunction() {
    var local = 7 // The fix for the error
    console.log(global+local)
}
varFunction()
repeatFunction()

function getHoursInTime() {
    if(new Date().getHours() < 12) {
        document.getElementById("Time").innerHTML = "AM | Hour: " + new Date().getHours() // Checks if the time is before noon
    }

    if(new Date().getHours() >= 12) {
        document.getElementById("Time").innerHTML = "PM | Hour: " + new Date().getHours() // Checks if the time is noon or later
    }
}

var correctNumber = Math.round((Math.random() * 99) + 1) // Generates a number between 1 and 100
function Prediction() {
    var guess = document.getElementById("Guess").value
    if(guess==correctNumber) { // Checks if your number is correct
        document.getElementById("Response").innerHTML = "You guessed the right number!"
    }
    if(guess<correctNumber && guess>0) { // Checks if your number is higher than the generated number
        document.getElementById("Response").innerHTML = "Higher"
    }
    if(guess>correctNumber && guess<101) { // Checks if your number is lower than the generated number
        document.getElementById("Response").innerHTML = "Lower"
    }
    if(guess<1 || guess>100 || isNaN(guess)) { // Checks if your input is invalid
        document.getElementById("Response").innerHTML = "Invalid"
    }
}

function operatorFunction(symbol) {
    var val1 = document.getElementById("Value1").value,val2 = document.getElementById("Value2").value
    if(symbol=="equal") {
        if(val1==val2) { // Checks if val 1 is equal to val2
            document.getElementById("output").innerHTML = val1 + " is equal to " + val2
        }
        else { // If not, run this statement
            document.getElementById("output").innerHTML = val1 + " is not equal to " + val2
        }
    }
    if(symbol=="greater") {
        if(val1>val2) { // Checks if val 1 is greater than val2
            document.getElementById("output").innerHTML = val1 + " is greater than " + val2
        }
        else { // If not, run this statement
            document.getElementById("output").innerHTML = val1 + " is not greater than " + val2
        }
    }
    if(symbol=="less") {
        if(val1<val2) { // Checks if val 1 is less than val2
            document.getElementById("output").innerHTML = val1 + " is less than " + val2
        }
        else { // If not, run this statement
            document.getElementById("output").innerHTML = val1 + " is not less than " + val2
        }
    }
    if(symbol=="greaterorequal") {
        if(val1>=val2) { // Checks if val 1 is greater than or equal to val2
            document.getElementById("output").innerHTML = val1 + " is greater than or equal to " + val2
        }
        else { // If not, run this statement
            document.getElementById("output").innerHTML = val1 + " is not greater than or equal to " + val2
        }
    }
    if(symbol=="lessorequal") {
        if(val1<=val2) { // Checks if val 1 is less than or equal to val2
            document.getElementById("output").innerHTML = val1 + " is less than or equal to " + val2
        }
        else { // If not, run this statement
            document.getElementById("output").innerHTML = val1 + " is not less than or equal to " + val2
        }
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}