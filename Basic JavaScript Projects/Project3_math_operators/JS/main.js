function addOperation() {
    var x = 2 + 2
    document.getElementById("math-add").innerHTML = "2 + 2 = " + x
}

function subtractOperation() {
    var x = 2 - 2
    document.getElementById("math-subtract").innerHTML = "2 - 2 = " + x
}

function multiplyOperation() {
    var x = 6 * 8
    document.getElementById("math-multiply").innerHTML = "6 * 8 = " + x
}

function divideOperation() {
    var x = 48 / 6
    document.getElementById("math-divide").innerHTML = "48 / 6 = " + x
}

function multiOperation() {
    var x = (5 + 7) * (3 - 1) / 3
    document.getElementById("math-multi").innerHTML = "(5 + 7) * (3 - 1) / 3 = " + x
}

function modulusOperation() {
    var x = 33 % 7
    document.getElementById("math-modulus").innerHTML = "The remainder of 33 % 7 is " + x
}

function negationOperation() {
    var x = 9
    document.getElementById("math-negation").innerHTML = -x
}

function incrementOperation() {
    var x = 4
    x++
    document.getElementById("math-increment").innerHTML = x
}

function decrementOperation() {
    var x = 8
    x--
    document.getElementById("math-decrement").innerHTML = x
}

function randomNumber() {
    var x = Math.random() * 99
    document.getElementById("math-random").innerHTML = x + 1
}

function powerMethod() {
    var x = Math.pow(4,3)
    document.getElementById("math-power").innerHTML = x
}

function mathOperation() {
    var equation = document.getElementById("operation").value
    document.getElementById("custom-math").innerHTML = equation + " = " + eval(equation)
}