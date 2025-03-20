function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var result = document.getElementById("result");
    var category=document.querySelector(".category")
    var heading=document.getElementById("h5");
    var heightvalue = parseFloat(heightInput.value) / 100; 
    var weightvalue = parseFloat(weightInput.value);

    if (isNaN(heightvalue) || isNaN(weightvalue) || heightvalue <= 0 || weightvalue <= 0) {
        alert("Please enter valid height and weight!");
        return;
    }

    var bmi = weightvalue / (heightvalue**2);

    result.innerText = "Your BMI is: " + bmi.toFixed(2);
     
    category.classList.remove("show");  // Animation reset
void category.offsetWidth;  // Re-trigger CSS animation
category.classList.add("show");  // Apply again


    if (bmi < 18.5) {
        heading.textContent="Tip : Go Eat Something"
        heading.style.color="red"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        heading.textContent="No need of Tip: All Good!"
        heading.style.color="green"
    } else if (bmi >= 25 && bmi <= 29.9) {
        heading.textContent="Step away from the fridge... slowly."
        heading.style.color="rgb(233, 57, 57);"
    } else {
        heading.textContent="Your chair is screaming. Time for a workout! !"
        heading.style.color="red"
    }
    return
}

var checkbtn = document.getElementById("calculate");
checkbtn.addEventListener("click", calculateBMI);
