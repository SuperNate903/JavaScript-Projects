var part1 = "I am using ",part2 = " the concat() method to ",part3 = "put strings together!"
document.getElementById("concat").innerHTML = part1.concat(part2,part3) // Combines 3 strings together

var sentence = "This is a small sentence, but in reality it is much bigger!"
document.getElementById("slice").innerHTML = sentence.slice(0,24) // Gets a slice of the string

var paragraph = "This sentence began with only a single capital letter!"
document.getElementById("caps").innerHTML = paragraph.toUpperCase() // Turns the letters upper case

var findtext = "The word text will be checked for in this sentence."
document.getElementById("number").innerHTML = findtext.search("text") // Gets the starting letter of "text"

var num = 68
document.getElementById("tostring").innerHTML = num.toString() // Turns the number into a string

var largenum = 4743.1425793456
document.getElementById("shortened").innerHTML = largenum.toPrecision(8) // Shortens the number

var decimal = 36.3452
document.getElementById("fixed").innerHTML = decimal.toFixed(1) // Rounds and turns into a string

var val = 23
document.getElementById("value").innerHTML = val.valueOf() // Get the value of val