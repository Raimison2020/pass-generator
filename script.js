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

   // Montando o conjunto de caracteres (forEach)
   options.forEach(option => {
      if (option.checked) {
         if (option.id !== "exc-duplicate" && option.id !== "spaces") {
            staticPassword += characters[option.id]
         } else if (option.id === "spaces") {
            staticPassword += ` ${staticPassword} `
         } else {
            excludeDuplicate = true
         }
      }
   });

   // Gerando a senha aleatória (for)
   for (let i = 0; i < passLength; i++) {
      let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]

      if (excludeDuplicate) {
         if (!randomPassword.includes(randomChar) || randomChar == " ") {
            randomPassword += randomChar
         } else {
            i--
         }
      } else {
         randomPassword += randomChar
      }
   }

   passwordInput.value = randomPassword
}

// Função updatePassIndicator
const updatePassIndicator = () => {
   passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong"
}

// Função updateSlider
const updateSlider = () => {
   document.querySelector(".pass-length span").innerText = lengthSlider.value
   generatePassword()
   updatePassIndicator()
}
updateSlider()

// Copy Pass
const copyPassword = () => {
   navigator.clipboard.writeText(passwordInput.value)
   copyIcon.innerText = "check"
   copyIcon.computedStyleMap.color = "#4285f4"
   setTimeout(() => {
      copyIcon.innerText = "copy_all"
      copyIcon.style.color = "#707070"
   }, 1500)
}

// Events
copyIcon.addEventListener("click", copyPassword)
lengthSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword)