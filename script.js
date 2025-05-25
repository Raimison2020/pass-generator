const lengthSlider = document.querySelector(".pass-length input")
const options = document.querySelectorAll(".option input")
const copyIcon = document.querySelector(".input-box span")
const passwordInput = document.querySelector(".input-box input")
const passIndicator = document.querySelector(".pass-indicator")
const generateBtn = document.querySelector(".generate-btn")

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "",
        randomPassword = "",
        excludeDuplicate = false,
        passLength = lengthSlider.value

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id]
            } else if (option.id === "spaces") {
                staticPassword += `${staticPassword}`
            } else {
                excludeDuplicate = true
            }
        }
    })
}