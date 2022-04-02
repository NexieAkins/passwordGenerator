let passG = document.getElementById("pass-g")
let pass1 = document.getElementById("pass0")
let pass2 = document.getElementById("pass1")
let pass3 = document.getElementById("pass2")
let pass4 = document.getElementById("pass3")



let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "<", ">"]
let passwordRange = document.getElementById("password-range")


function passGen() {
    passwordRange.textContent = passwordRange.value
    pass1.textContent = ""
    pass2.textContent = ""
    pass3.textContent = ""
    pass4.textContent = ""
    for (let i = 0; i < passwordRange.textContent; i++) {
        let result = Math.floor(Math.random() * characters.length)
        pass1.innerText += characters[result]
    }
    for (let i = 0; i < passwordRange.textContent; i++) {
        let result = Math.floor(Math.random() * characters.length)
        pass2.innerText += characters[result]
    }
    for (let i = 0; i < passwordRange.textContent; i++) {
        let result = Math.floor(Math.random() * characters.length)
        pass3.innerText += characters[result]
    }
    for (let i = 0; i < passwordRange.textContent; i++) {
        let result = Math.floor(Math.random() * characters.length)
        pass4.innerText += characters[result]
    }

}
function copyPass(){
  let copyP = document.getElementById("copyP1");
copyP.select();
    document.execCommand('copy');

    alert("Copied!");}
