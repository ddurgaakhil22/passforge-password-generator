document.addEventListener("DOMContentLoaded", function(){

const passwordField = document.getElementById("password")
const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")

const generateBtn = document.getElementById("generateBtn")
const copyBtn = document.getElementById("copyBtn")

lengthValue.textContent = lengthSlider.value

lengthSlider.addEventListener("input",()=>{
lengthValue.textContent = lengthSlider.value
})

generateBtn.addEventListener("click", generatePassword)
copyBtn.addEventListener("click", copyPassword)

function generatePassword(){

const length = parseInt(lengthSlider.value)

let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let symbols = "!@#$%^&*()_+"

if(document.getElementById("avoid").checked){
lower = lower.replace(/[l]/g,'')
upper = upper.replace(/[O]/g,'')
numbers = numbers.replace(/[01]/g,'')
}

let chars = ""

if(document.getElementById("lowercase").checked) chars += lower
if(document.getElementById("uppercase").checked) chars += upper
if(document.getElementById("numbers").checked) chars += numbers
if(document.getElementById("symbols").checked) chars += symbols

if(chars === ""){
alert("Select at least one option")
return
}

let password = ""

for(let i=0;i<length;i++){
const rand = Math.floor(Math.random()*chars.length)
password += chars[rand]
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
alert("Password copied!")

}

function checkStrength(password){

const strengthText = document.getElementById("strengthText")
const strengthFill = document.getElementById("strengthFill")

let strength = 0

if(password.length >= 8) strength++
if(/[A-Z]/.test(password)) strength++
if(/[0-9]/.test(password)) strength++
if(/[^A-Za-z0-9]/.test(password)) strength++

if(strength <=1){
strengthText.textContent="Weak"
strengthFill.style.width="25%"
strengthFill.style.background="red"
}
else if(strength==2){
strengthText.textContent="Medium"
strengthFill.style.width="50%"
strengthFill.style.background="orange"
}
else if(strength==3){
strengthText.textContent="Strong"
strengthFill.style.width="75%"
strengthFill.style.background="yellow"
}
else{
strengthText.textContent="Very Strong"
strengthFill.style.width="100%"
strengthFill.style.background="lime"
}

}

})
