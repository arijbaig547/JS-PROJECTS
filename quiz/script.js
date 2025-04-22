var questions = [
  {
    question: "What does HTML stand for, and what is its primary purpose in web development?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hypertext Markup Language",
    option3: "Home Tool Markup Language",
    correctOption: "Hypertext Markup Language",
  },
  {
    question: "Who is responsible for creating and maintaining the official web standards for the internet?",
    option1: "Google",
    option2: "The World Wide Web Consortium",
    option3: "Microsoft",
    correctOption: "The World Wide Web Consortium",
  },
  {
    question: "Which HTML element should you use to represent the largest heading on a webpage?",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    correctOption: "<h1>",
  },
  {
    question: "What is the correct HTML element to use when you want to insert a line break and move content to the next line?",
    option1: "<linebreak>",
    option2: "<br>",
    option3: "<break>",
    correctOption: "<br>",
  },
  {
    question: "What is the proper way to apply a background color to a webpage using HTML?",
    option1: '<body bg="yellow">',
    option2: "<background>yellow</background>",
    option3: '<body style="background-color:yellow;">',
    correctOption: '<body style="background-color:yellow;">',
  },
  {
    question: "Which HTML element is used to define important text that should stand out from the rest of the content on the page?",
    option1: "<strong>",
    option2: "<b>",
    option3: "<i>",
    correctOption: "<strong>",
  },
  {
    question: "Which HTML element is used to define text that is emphasized or should be given special attention?",
    option1: "<italic>",
    option2: "<i>",
    option3: "<em>",
    correctOption: "<em>",
  },
  {
    question: "How do you create a hyperlink in HTML that allows users to click and navigate to another webpage?",
    option1: "<a>http://www.w3schools.com</a>",
    option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
  },
];




var ques = document.querySelector("#question");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var options = document.querySelectorAll('input[name="option"]');
var scoreDisplay = document.getElementById("score");
var time = document.getElementById("timer");
var startbtn = document.getElementById("startbtn")

var index = 0;
var score = 0;
var jstime = 10;
var interval;

function startQuiz() {
  var container = document.querySelector(".container")
  container.classList.add("display");
  loadQuestion();
}


function startTimer() {
  clearInterval(interval); 
  jstime = 15;
  time.textContent = jstime;

  interval = setInterval(() => {
    jstime--;
    time.textContent = jstime;

    if (jstime <= 0) {
      clearInterval(interval);
      autoMoveNext(); 
    }
  }, 1000);
}

function loadQuestion() {
  clearInterval(interval); 

  if (index >= questions.length) {
    clearInterval(interval);

    if (score >= 40) {
      Swal.fire({
        title: "Congratulations You Passed The Test",
        text: "Your Score is: " + score,
        icon: "success",
        confirmButtonText: "Restart"
      }).then(() => {
        location.reload();
      });
    } else {
      Swal.fire({
        title: "Alas ! You Failed The Test",
        text: "Your Score is: " + score,
        icon: "error",
        confirmButtonText: "Restart"
      }).then(() => {
        location.reload();
      });
    }

    return;
  }


  ques.textContent = questions[index].question;
  opt1.textContent = questions[index].option1;
  opt2.textContent = questions[index].option2;
  opt3.textContent = questions[index].option3;

  
  options.forEach(opt => opt.checked = false);

 
  startTimer();
}


function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var selectedLabel;
    if (selectedOption.id === "option1") selectedLabel = opt1.textContent;
    else if (selectedOption.id === "option2") selectedLabel = opt2.textContent;
    else if (selectedOption.id === "option3") selectedLabel = opt3.textContent;

    if (selectedLabel === questions[index].correctOption) {
      score += 10;
      scoreDisplay.textContent = score;
    }
  }
}

function updateQuestion() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Select at least one option");
    return;
  }

  clearInterval(timer);
  checkAnswer();
  index++;
  loadQuestion();
}

function autoMoveNext() {
  checkAnswer();
  index++;
  loadQuestion();
}





