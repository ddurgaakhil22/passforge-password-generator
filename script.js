const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")
const passwordField = document.getElementById("password")

lengthSlider.addEventListener("input", function(){
lengthValue.textContent = lengthSlider.value
})

function generatePassword(){

let length = lengthSlider.value

let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let symbols = "!@#$%^&*()_+"

let allChars = lower

if(document.getElementById("uppercase").checked){
allChars += upper
}

if(document.getElementById("numbers").checked){
allChars += numbers
}

if(document.getElementById("symbols").checked){
allChars += symbols
}

let password = ""

for(let i=0;i<length;i++){

let randomIndex = Math.floor(Math.random() * allChars.length)

password += allChars[randomIndex]

}

passwordField.value = password

checkStrength(password)

}

function copyPassword(){

if(passwordField.value === ""){
alert("Generate password first")
return
}

navigator.clipboard.writeText(passwordField.value)

alert("Password Copied")

}

function checkStrength(password){

let strengthText = document.getElementById("strengthText")

if(password.length < 8){
strengthText.textContent = "Weak"
}
else if(password.length < 14){
strengthText.textContent = "Medium"
}
else{
strengthText.textContent = "Strong"
}

}
