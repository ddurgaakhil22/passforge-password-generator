function generatePassword(){

const length = document.getElementById("length").value

const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+"

let characters = lower

if(document.getElementById("uppercase").checked){
characters += upper
}

if(document.getElementById("numbers").checked){
characters += numbers
}

if(document.getElementById("symbols").checked){
characters += symbols
}

let password = ""

for(let i=0;i<length;i++){

let random = window.crypto.getRandomValues(new Uint32Array(1))[0] % characters.length

password += characters[random]

}

document.getElementById("password").value = password
}
