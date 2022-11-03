function switchFunction() {
    var input = document.getElementById("text-box").value;
    var output;
    switch(input) {
        case "Bacon":
            output = "You picked \"Bacon\"";
        break;
        case "Ground Beef":
            output = "You picked \"Ground Beef\"";
        break;
        case "Mushrooms":
            output = "You picked \"Mushrooms\"";
        break;
        case "Bell Peppers":
            output = "You picked \"Bell Peppers\"";
        break;
        case "White Onions":
            output = "You picked \"White Onions\"";
        break;
        default:
        output = "Please pick a topping from the list above.";
    }
    document.getElementById("switch-output").innerHTML = output;
}

function modifyClass() {
    var classElements = document.getElementsByClassName("modify");
    for(var i = 0; i < classElements.length; i++) {
        let text = classElements[i].innerHTML;
        classElements[i].innerHTML = "I made a change to the " + text.toLowerCase() + " element!";
    }
}

var c = document.getElementById("gradient-canvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1/6,"orange");
grd.addColorStop(1/3,"yellow");
grd.addColorStop(1/2,"green");
grd.addColorStop(2/3,"blue");
grd.addColorStop(5/6,"purple");
grd.addColorStop(1,"red");
ctx.fillStyle = grd;
ctx.fillRect(0,0,200,200);

document.body.classList.add("fade-out");

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
});