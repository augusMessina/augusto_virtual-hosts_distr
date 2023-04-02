function validate() {

    const inputUser = document.getElementById("username")
    const inputPassword = document.getElementById("password")
    const responseMSG = document.getElementById("responseMSG")

    if(inputUser.value === "augusto2" && inputPassword.value === "my_other_password"){
        responseMSG.innerHTML = "Authentication succesfull!"
        responseMSG.style.color = "#77dd77"
    } else {
        responseMSG.innerHTML = "Invalid username or password"
        responseMSG.style.color = "#ff6961"
    }
}

function swapVisibility(){

    const inputPassword = document.getElementById("password")
    const eyeIcon = document.getElementById("eye-icon")

    if(inputPassword.type === "password"){
        inputPassword.type = "text"
        eyeIcon.className = "gg-eye-alt"
    } else {
        inputPassword.type = "password"
        eyeIcon.className = "gg-eye"
    }

}