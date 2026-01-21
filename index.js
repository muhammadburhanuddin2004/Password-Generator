const characters = [
    // Numbers
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    // Special Characters
    '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',
    // Uppercase
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // Lowercase
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
let firstField = document.getElementById("field1")
let secondField = document.getElementById("field2")
let isGenerated = false
function getRandomIndex() {
    let index = Math.floor(Math.random() * characters.length)
    return index
}
console.log(firstField)
function generate() {
    if (isGenerated) {
        firstField.textContent = ""
        secondField.textContent = ""

    }
    for (let i = 0; i < 15; i++) {
        firstField.innerText += characters[getRandomIndex()]
        secondField.textContent += characters[getRandomIndex()]
        isGenerated = true
    }
}
