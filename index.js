const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var pass1Generated = false
var pass2Generated = false

var randomIndexs = []
var newPass = ""

var passWord1 = ""
var passWord2 = ""


function generate(){
        for (let i = 0; i< 15; i++){
            randNum = Math.floor(Math.random() * 91)
            randomIndexs.push(randNum)
            }
        for (j = 0; j<randomIndexs.length; j++){
            newPass += characters[randomIndexs[j]]
        }
        if (pass1Generated === false){
            passWord1 = newPass
            pass1Generated = true
            randomIndexs = []
            newPass = ""
            generate()
        }
        else if (pass2Generated === false) {
            passWord2 = newPass
            pass2Generated = true
            let pass1 = document.getElementById("password1-el")
            let pass2 = document.getElementById("password2-el")
            pass1.textContent = passWord1
            pass2.textContent = passWord2
            
        }
    }

function copy1() {
    if (pass1Generated===true){
    var copiedPass = passWord1
    alert("Password 1 has been copied to clipboard")
    }
    else{
        alert("Password hasn't been generated yet!")
    }
}

function copy2() {
    if (pass2Generated===true){
    var copiedPass = passWord2
    alert("Password 2 has been copied to clipboard")
    }
    else{
        alert("Password hasn't been generated yet!")
    }
}
