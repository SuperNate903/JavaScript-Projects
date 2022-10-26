document.write(typeof 7)
document.write("<br>14" + 4)

var val1= 0/0, val2 = "123", val3 = "ABC"

document.write("<br>"+val1)
document.write("<br>"+isNaN(val2))
document.write("<br>"+isNaN(val3))

document.getElementById("pos-infin").innerHTML = 3E310
document.getElementById("neg-infin").innerHTML = -3E310

document.write("<br>")
document.write(6 > 2)
document.write("<br>")
document.write(8 < 7)

console.log(2+2)
console.log(3>7)

document.write("<br>")
document.write(13 == 13)
document.write("<br>")
document.write(16 == 21)

document.write("<br>")
document.write(13 === 13)
document.write("<br>")
document.write(12 === "16")
document.write("<br>")
document.write(16 === "16")
document.write("<br>")
document.write(16 === 21)

document.write("<br>")
document.write(13 == 13 && 15 > 7)
document.write("<br>")
document.write(12 == 3 && 9 < 12)

document.write("<br>")
document.write(31 < 21 || 6 > 3)
document.write("<br>")
document.write(12 == 13 || 7 > 8)

document.write("<br>")
document.write(!(7 > 12))
document.write("<br>")
document.write(!(4 > 2))