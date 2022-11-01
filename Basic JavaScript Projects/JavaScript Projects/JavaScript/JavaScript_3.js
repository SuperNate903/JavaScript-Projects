function buttonClick(button) {
    var order = button.getAttribute("data-button-order")
    document.getElementById("display").innerHTML = "The " + order + " button was pressed!"
}