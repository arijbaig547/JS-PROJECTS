var jsscore = 0; 
var question = document.getElementById("question"); 
var options = document.querySelectorAll(".options input");
var next = document.getElementById("nextbtn");
var prev = document.getElementById("previousbtn");
var score=document.getElementById("score");
var progress=document.getElementById("progress-bar")
var qscontainer=document.querySelector(".question-container")
   var result = document.querySelector(".result");
        var finalText = document.getElementById("final");

        result.style.display = "none"; // Make result visible

// List of questions
const questions = [
    "What is the Capital of Pakistan?",
    "What is the Capital of India?",
    "What is the Capital of Bangladesh?",
    "Who is the Founder of CHATGPT?",
    "Which planet is known as the Red Planet?",
    "What is the largest ocean on Earth?",
    "Who wrote 'Hamlet'?",
    "What is the currency of Japan?",
    "What is 5 + 7?",
    "Which is the smallest continent by land area?",
    "What is the national animal of Pakistan?",
    "What is the chemical symbol for Gold?",
    "Which country won the FIFA World Cup in 2018?",
    "Who discovered gravity?",
    "What is the boiling point of water in Celsius?"
];


const optArr = [
    ["Islamabad", "Karachi", "Lahore", "Multan"],
    ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    ["Dhaka", "Chittagong", "Kathmandu", "Srinagar"],
    ["Sam Altman", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
    ["Earth", "Mars", "Venus", "Jupiter"],
    ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
    ["Yen", "Won", "Dollar", "Euro"],
    ["10", "11", "12", "13"],
    ["Australia", "Europe", "Antarctica", "South America"],
    ["Lion", "Tiger", "Markhor", "Elephant"],
    ["Ag", "Au", "Fe", "Pb"],
    ["Germany", "Brazil", "France", "Argentina"],
    ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    ["50°C", "75°C", "100°C", "120°C"]
];

const correctAns = [
    "Islamabad",
    "Delhi",
    "Dhaka",
    "Sam Altman",
    "Mars",
    "Pacific Ocean",
    "William Shakespeare",
    "Yen",
    "12",
    "Australia",
    "Markhor",
    "Au",
    "France",
    "Isaac Newton",
    "100°C"
];


function animateQuestion() {
    gsap.fromTo("#question", 
        { opacity: 0, x: -50 },  // Start Position
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" } // End Position
    );
}

var index = 0; 
function updateOptions() {
    options.forEach((option, i) => {
        option.value = optArr[index][i]; // Update the value
        option.nextSibling.textContent = optArr[index][i]; // Update the text
    });
}

function checkAnswer() {
   var isChecked=false

    options.forEach(option => {
        if (option.checked) { // ✅ Yeh check karega ki konsa option selected hai
            isChecked=true
            if (option.value === correctAns[index]) {
                jsscore += 10;
            } else {
                jsscore -= 10;
            }
            score.innerHTML = "Score: " + jsscore;
        }
    });
    if(!isChecked){
        alert("Select at Least one Option")
        return false;
        
    }
    return true
}


function nextQuestion() {
    if (!checkAnswer()) {
        return;
    }

    if (index < questions.length - 1) {
        index++; // Move to the next question

     
        let progressPercentage = ((index) / questions.length) * 100;
        progress.style.width = progressPercentage + "%";

        question.innerHTML = questions[index]; // Update question text
        updateOptions(); // Update options
        animateQuestion();
    }
    else{
        printResult();
    }
}

function resetGame() {
    jsscore = 0; // Reset score
    index = 0; // Reset index
    progress.style.width = "0%"; // Reset progress bar
    score.innerHTML = "Score: " + jsscore; // Reset score display

    // Hide result section and show questions
    result.style.display = "none";
    qscontainer.style.display = "block";

    // Reset question and options
    question.innerHTML = questions[index];
    updateOptions();

    // Uncheck all options
    options.forEach(option => option.checked = false);

    // Hide the image
    var img = document.getElementById("image");
    img.style.display = "none";

    // Hide Play Again button
    var playAgainBtn = document.getElementById("playAgainBtn");
    if (playAgainBtn) {
        playAgainBtn.style.display = "none";
    }
}

function printResult() {
    if (index === questions.length - 1) { 
        qscontainer.style.display = "none"; 
        result.classList.add("showresult");
        result.style.display = "flex"; 
        finalText.innerHTML = "Your Score is " + jsscore;

        var img = document.getElementById("image");
        var cong = document.getElementById("cong");

        if (jsscore >= 60) {
            cong.textContent = "Congrats";
            cong.style.color = "rgb(84, 239, 27)";
            img.style.display = "block";
            cong.style.fontSize="20px"
            cong.style.fontWeight="600"
            img.src = "https://media1.tenor.com/m/Hyjw1hbzDGAAAAAd/nod-batman.gif";
        } else {
            cong.textContent = "Better Luck Next Time";
            cong.style.color = "rgb(239, 27, 27)";
            cong.style.fontWeight="600"
            img.style.display = "block";
            img.src = "https://media1.tenor.com/m/M2eXJyejrzwAAAAd/maza-aa-gaya-bhai-arpit-bala-meme.gif";
        }


        var playAgainBtn = document.getElementById("playAgainBtn");

        if (!playAgainBtn) {
            playAgainBtn = document.createElement("button");
            playAgainBtn.textContent = "Play Again";
            playAgainBtn.id = "playAgainBtn";
            playAgainBtn.style.border="none"
            playAgainBtn.style.marginTop = "20px";
            playAgainBtn.style.padding = "10px 15px";
            playAgainBtn.style.fontSize = "16px";
            playAgainBtn.addEventListener("click", resetGame);
            result.appendChild(playAgainBtn); // Add button inside result section
        }

        // Make button visible
        playAgainBtn.style.display = "block";
    }
}





updateOptions();

// Attach event listeners
next.addEventListener("click", nextQuestion);
prev.addEventListener("click", previousQuestion);