var input = document.getElementById("guessinput"); 
var btn = document.getElementById("check");
var img = document.getElementById("image");
var respbox = document.getElementById("responseBox");
var responseText = document.getElementById("resptext");

var correctAns=26

function checkGuess() {
    var userGuess = input.value.trim();
     
    if (userGuess === "") {  
        alert("Input Field can't be Empty"); 
        return; 
    }

    userGuess = +(userGuess);

    if (userGuess < 1 || userGuess > 30) {  
        alert("Limit is (1-30)");
    } else if (userGuess === correctAns) {
        respbox.style.display = "block";
        responseText.textContent = "Correct Guess !!!";
        respbox.style.backgroundColor="#B3D8A8"
        img.src = "https://media1.tenor.com/m/K1w-Ms7t82UAAAAd/shocked-meme-viral-chi-wow.gif";
        
    } else if(userGuess>=20) {
        respbox.style.display = "block";
        respbox.style.backgroundColor="red"
        img.src = "https://media.tenor.com/brxNfY_oHe0AAAAM/chii-funny-viral.gif";
        responseText.textContent = "Wrong,Too Close! Try Again";
    }
    else if(userGuess<=19){
        respbox.style.display = "block";
        respbox.style.backgroundColor="red"
        img.src = "https://media.tenor.com/brxNfY_oHe0AAAAM/chii-funny-viral.gif";
        responseText.textContent = "Wrong,Too Far! Try Again";
    }
    respbox.style.display = "block";
    respbox.style.animation = "none";  // Remove previous animation
    void respbox.offsetWidth;  // Force reflow
    respbox.style.animation = "fadeIn 0.5s ease-in-out";  // Reapply animation
}

btn.addEventListener("click",checkGuess)