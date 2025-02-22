function alertUser() {
    let name = document.getElementById("name").value;
    if (name.trim() !== "") {
        alert("Hi " + name + "!");
    }
}

let isBlue = true;
function toggleBackgroundColor() {
    document.body.style.backgroundColor = isBlue ? "red" : "Green";
    isBlue = !isBlue;  
}

function validateText() {
    let input = document.getElementById("textInput").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(input)) {
        alert("No Special Characters!");
    } else {
        alert("Text is valid!");
    }
}

function addText() {
    let heading = document.getElementById("main-heading");
    heading.textContent += " - Add Text";
}
