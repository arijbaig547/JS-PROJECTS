var emailinput = document.getElementById("email-inp")
var passinput = document.getElementById("pass-inp");
var button = document.getElementById("btn");
var elabel = document.getElementById("email-lab")
var icon = document.getElementById("envelope")
var lock=document.getElementById("lock")
var passlab=document.getElementById("pass-lab")
var eye=document.getElementById("eye")
var signup=document.getElementById("btn")
var container=document.querySelector(".container")
var toggle=document.getElementById("toggle");
let isDark=false;

function checkEmail() {

    if (emailinput.value.trim() !== "") {
        icon.classList.add("iconactive")
        if (emailinput.value.includes("@")) {
            elabel.textContent = "Email Must Contain .com (e.g @gmail.com)"
            elabel.classList.add("redlabel")
            if (emailinput.value.includes(".com")) {
                elabel.textContent = "Correct Email Format"
                elabel.classList.add("greenlabel")
                return true;
            }
        }

    }
    else {
        elabel.textContent = "Email Must include @";
        elabel.classList.remove("greenlabel")
        elabel.classList.remove("redlabel")
        icon.classList.remove("iconactive")
    }
    return false

}



function checkPass() {
    var numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    
    let hasNumber = false;  
    let hasSpecial = false; 

    if (passinput.value.trim() !== "") {
        lock.classList.add("iconactive")
        for (let i = 0; i < numb.length; i++) {
            if (passinput.value.includes(numb[i])) {
                hasNumber = true;
                break;
            }
        }
        for (let i = 0; i < special.length; i++) {
            if (passinput.value.includes(special[i])) {
                hasSpecial = true;
                break;
            }
        }

        if (!hasNumber) {
            passlab.classList.add("redlabel");
            passlab.textContent = "Must include a Number";
        } 
        if (!hasSpecial) {
            passlab.classList.add("redlabel");
            passlab.textContent = "Must include a Special Character";
        }
        if (hasSpecial && hasNumber) {
            passlab.classList.remove("redlabel"); 
            passlab.classList.add("greenlabel");
            passlab.textContent = "Correct Format";
            return true; 
        }
    } else {
        passlab.textContent = "Must include Special Character & Number";
        passlab.classList.remove("redlabel");
        passlab.classList.remove("greenlabel");
        lock.classList.remove("iconactive")
    }
    return false;
}

function showPass(){
    var isShow=false;
    if(passinput.type==="password"){
        passinput.type="text"
        isShow=true;
        eye.style.color="white"
    }
    if(!isShow){
        passinput.type="password"
        eye.style.color="black"
    }
    isShow=!isShow
}



emailinput.addEventListener("input", checkEmail)
passinput.addEventListener("input",checkPass)
eye.addEventListener("click",showPass)

toggle.addEventListener("click", function () {
    isDark = !isDark;
    gsap.to(container, {
        duration: 1,
        opacity: 0,
        onComplete: function () {
            if (isDark) {
                container.style.background = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0.2)), url("images/day.webp")';
                container.style.backgroundPosition="center"
                container.style.backgroundSize="cover"
                container.style.backgroundRepeat="no-repeat"
            } else {
                container.style.background = 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3),rgba(0,0,0,0.2)), url("images/forest.webp")';
            }

            gsap.to(container, { duration: 0.5, opacity: 1 });
        }
    });
});


signup.addEventListener("click", function (event) {
  

    let emailValid = checkEmail();
    let passValid = checkPass();

    if (emailValid && passValid) {
        alert("Account Successfully Created!");
    } else {
        alert("Please enter valid Email and Password!");
    }
});

