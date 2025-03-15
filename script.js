
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var miliseconds = document.getElementById("miliseconds");
var circle = document.querySelector(".dot-wrapper");
var startbtn = document.getElementById("startbtn");
var stopbtn = document.getElementById("stopbtn");
var resetbtn=document.getElementById("resetbtn")


var jsseconds = 0;
var jsminutes = 0;
var jsmili = 0;
var interval;
var isRunning = false; 
var isStart = false;

function startTimer() {
    if (isRunning) return; 

    isRunning = true; 
    isStart = true;
    circle.classList.add("start");
    document.body.classList.add("blue");
    resetbtn.style.display="block  "

    interval = setInterval(function () {
        jsmili++; 
        miliseconds.innerHTML = "." + jsmili;

        if (jsmili >= 100) {  
            jsmili = 0;
            jsseconds++; 
            seconds.innerHTML = jsseconds;
        }
        if (jsseconds >= 60) {  
            jsseconds = 0;
            jsminutes++; 
            minutes.innerHTML = jsminutes + ":";
        }
    }, 10); 
    updateButtons();
}

function stopTimer() {
    document.body.classList.remove("blue");
    clearInterval(interval);
    isRunning = false;
    isStart = false;
    circle.classList.remove("start");
    updateButtons();
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    resetbtn.style.display="none"
    // Reset animations & UI
    circle.classList.remove("start");
    circle.classList.add("reset");
    
    stopTimer()

       

    // Reset timer values
    jsseconds = 0;
    jsminutes = 0;
    jsmili = 0;

    // Update UI
    seconds.innerHTML = jsseconds;
    miliseconds.innerHTML = jsmili;
    minutes.innerHTML = "";
    
    updateButtons();
}


function updateButtons() {
    if (isStart) {
        startbtn.style.display = "none";
        stopbtn.style.display = "block";
    } else {
        stopbtn.style.display = "none";
        startbtn.style.display = "block";
    }
}
