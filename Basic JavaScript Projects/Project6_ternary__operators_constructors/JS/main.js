function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Dogs(Breed, Age) {
    this.Dog_Breed = Breed;
    this.Age = Age;
}
var Chewy = new Dogs("Chihuahua",6)
var Max = new Dogs("Golden Retriever",13)
var Cherry = new Dogs("Poodle",9)
function makeSentence() {
    document.getElementById("New_and_This").innerHTML = "Cherry is a " + Cherry.Dog_Breed + " and is " + Cherry.Age + " years old."
}

function Counter() {
    document.getElementById("Nested_Function").innerHTML = countUp()
    function countUp() {
        var currentNumber = document.getElementById("Nested_Function").innerHTML
        currentNumber++
        return currentNumber
    }
}