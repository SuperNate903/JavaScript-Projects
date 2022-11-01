function validateForm() {
    let x = document.forms["contact-form"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    else {
        let y = document.forms["contact-form"]["lname"].value;
        if (y == "") {
            alert("Last name must be filled out");
            return false;
        }
    }
}