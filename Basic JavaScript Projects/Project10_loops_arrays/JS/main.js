function Call_Loop() {
    var x = 0
    while(x<15) {
        x++
        document.getElementById("looped-text").innerHTML += "Loop #" + x + "<br>"
    }
    document.getElementById("looped-text").innerHTML += "I have looped " + x + " times!"
}

function getStringLength() {
    var text = document.getElementById("input-text").value, length = text.length
    document.getElementById("string-length").innerHTML = "The string \"" + text + "\" has " + length + " characters!"
}

function for_Loop() {
    var instruments = ["Flute","Tuba","Triangle","Drums","Guitar"]
    for(i=0;i<instruments.length;i++) {
        document.getElementById("List_of_Instruments").innerHTML += instruments[i] + "<br>"
    }
}

function array_Function() {
    var essentials = []
    essentials[1] = "Food"
    essentials[2] = "Water"
    essentials[3] = "Shelter"
    essentials[4] = "Clothing"
    document.getElementById("Array").innerHTML = essentials[3] + " is an essential need for survival."
}

function constant_fynction() {
    const Cats = {breed:"Siamese",age:7}
    Cats.age = 8
    Cats.state = "asleep"
    document.getElementById("Constant").innerHTML = "Jenny has a " + Cats.breed + " cat who is " + Cats.age + " years old. They are currently " + Cats.state + "."
}

function letValue() {
    var x = "This string is outside brackets"
    document.getElementById("string").innerHTML += x + "<br>"
    {
        let x = "This string is inside brackets"
        document.getElementById("string").innerHTML += x + "<br>"
    }
    document.getElementById("string").innerHTML += x
}

function returnFunction(num) {
    if(isNaN(num)) {
        return "I wasn't sent a number."
    }
    else {
        return "I was sent the number " + num + " and added 8 to it, equalling " + eval(num + 8) + "."
    }
}

let Dogs = {
    breed: "Huskey",
    age: 6,
    desc: function() {
        return "Sam is a " + this.age + " year old " + this.breed + "."
    }
}
document.getElementById("object-desc").innerHTML = Dogs.desc()