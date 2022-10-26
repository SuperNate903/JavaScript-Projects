window.alert("Hello, World!"); // Displays an alert box saying Hello, World!
document.write("<br>Hello, World!"); // Writes Hello, World!

var A = "<br>This is a string!";
document.write(A); // Writes the variable A

var Alert = "Alert box";
window.alert(Alert); // Displays an alert box from a variable labeled Alert

document.write("<br>I am just a string, " + "but I\'ve been concatenated!") // Writes a concatenated string

var B = "Concatenated" + " String";
document.write(B); // Writes a concatenated string from a variable labeled B

var num1 = 5, num2 = 13, num3 = 39
document.write("<br>"+num2); // This is printing the second number in the var list above

document.write("<br>") // Indents to the next line
document.write(3+12); // An expression that adds 3 and 12 together

document.write("<br>") // Indents to the next line
var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string"
document.write(Sent1+Sent2) // Concatenates Sent1 and Sent2 variables together

function keyPressed() {
    window.alert("You pressed a key in the input!");
}