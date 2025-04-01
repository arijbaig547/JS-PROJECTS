document.getElementById("window").addEventListener("click", function () {
    let navItems = document.querySelector(".nav-items");
    navItems.classList.toggle("show-nav");
});


document.querySelector(".btn-login").addEventListener("click", function () {
    let login = document.querySelector(".login");
    let main = document.querySelector(".main");


    if (main.style.display !== "block") {
        // Show the element before animation starts
        main.style.display = "block";

        // Animate smoothly using GSAP
        gsap.fromTo(
            ".main",
            {  opacity:0 }, // Starting state
            { opacity: 1, duration: 1,ease: "power2.out" } // Ending state
        );

        // Hide the login section
        login.classList.add("show-login");
    }
});


var modebtn = document.getElementById("modebtn");

modebtn.addEventListener("click", function () {
    let main = document.querySelector(".main");

    // Agar "main" hidden hai to usko dikhaye
    if (window.getComputedStyle(main).display === "none") {
        main.style.display = "block";
    }
    

        main.classList.toggle("light");
  
    // Light mode toggle
   

    console.log("Light mode applied:", main.classList.contains("light"));
});


// document.getElementById("powerbtn").addEventListener("click",function(){
//     let main = document.querySelector(".main");

//     let shutdown=document.querySelector(".shutdown")
//         main.style.display="none"
//         gsap.fromTo(".shutdown",
//             {opacity:0},
//             {opacity:1,duration:2,ease:"power2.out"}
//     )
//         shutdown.style.display="block"
   
// })
document.getElementById("powerbtn").addEventListener("click", function() {
    let main = document.querySelector(".main");
    let login = document.querySelector(".login");
   
    login.classList.remove("show-login");
    // Hide the main content
    main.style.display = "none";
    gsap.fromTo(".login",
                 {opacity:0},
                  {opacity:1,duration:2,ease:"power2.out"}
           )
    // Animate and show the login div
  

    // Ensure the login div is displayed after the animation
    login.style.display = "flex";  // Set to flex or block depending on your layout
});


var currentTime = document.querySelectorAll(".currentTime");

currentTime.forEach("time",updateTime)
function updateTime() {
  
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
   
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    currentTime.textContent = `${hours}:${minutes}`;
}

// Har second baad time update karne ke liye
setInterval(updateTime, 1000);

// Pehli dafa bhi time show karne ke liye
updateTime();
