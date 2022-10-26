function dictionary() {
    var Elements = {
        Number: 5,
        String: "String",
        Float: 3.54
    }
    delete Elements.String // Deletes the string value
    document.getElementById("Dictionary").innerHTML = Elements.String // Attempts to display string value
}