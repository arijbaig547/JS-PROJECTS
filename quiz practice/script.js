// function changeCase(word){
//     var uppercase=word.toUpperCase()
//     var lowercase=word.toLowerCase()
//     document.write(`Upper Case of ${word} is ${uppercase}` )
//     document.write(`<br> Lower Case of ${word} is ${lowercase}`)
// }

// changeCase("Hello")


// function LengthExtract(word){
// var length=word.length
// var slice=word.slice(0,5);

// document.write(`Length of ${word} is ${length}`)
// document.write(`<br> Extract of ${word} is ${slice}`)
// }

// LengthExtract("Pakistan")

// function segment(string, word) {
//     var index = string.indexOf(word); // Word ka index find karna
//     return index; // Agar nahi mila to -1 return hoga
// }

// document.write(segment("Pakistan", "tan")); // 5
// document.write(segment("Hello World", "World")); // 6
// document.write(segment("JavaScript", "Python")); // -1 (Nahi mila)


// var word="I love Pakistan"
// var replace=word.replace("Pakistan","PAK");
// document.write("<br> " + word)
// document.write("<br>"+replace);


// var number=parseFloat(15.9)
// document.write(Math.ceil(number));

// var randomNum=Math.floor(Math.random()*100)+1
// document.write(randomNum)

// var number=10.534567
// var fixedNo=number.toFixed(2)
// document.write(fixedNo)

// var globalVar = "Main ek global variable hoon"; // Global Variable

// function testScope() {
//     var localVar = "Main ek local variable hoon"; // Local Variable

//     document.write(`Global Variable: ${globalVar} <br>`); 
//     document.write(`Local Variable: ${localVar} <br>`);
// }

// testScope(); // Function ko call kar rahe hain

// // Yeh line error degi kyunki localVar function ke bahar access nahi ho sakta
// document.write(localVar);  


var dayNumber=+prompt("Enter a Number to tell its Day")

switch(true){
    case(dayNumber===1):
        document.write("Monday");
        break;
    case(dayNumber===2):
    document.write("Tuesday");
    break;
    case(dayNumber===3):
    document.write("Wednesday");
    break;
    case(dayNumber===4):
    document.write("Thursday");
    break;
    case(dayNumber===5):
    document.write("Friday");
    break;
    case(dayNumber===6):
    document.write("Saturday");
    break;
    case(dayNumber===7):
    document.write("Sunday");
    break;
default:
    alert("Wrongg INput")
   
}

