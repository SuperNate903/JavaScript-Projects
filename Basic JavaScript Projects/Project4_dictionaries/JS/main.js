function dictionary() {
    var Elements = {
        Number: 5,
        String: "String",
        Float: 3.54
    }
    delete Elements.String
    document.getElementById("Dictionary").innerHTML = Elements.String
}