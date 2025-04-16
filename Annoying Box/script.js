var nobtn = document.getElementById("nobtn");
var yesbtn = document.getElementById("yesbtn");
var h4 = document.querySelector("h4"); 
var h5 = document.querySelector("h5"); 
var buttons = document.querySelector(".buttons"); // Select buttons div

nobtn.addEventListener("mouseover", function () {
    var maxX = window.innerWidth - nobtn.offsetWidth;
    var maxY = window.innerHeight - nobtn.offsetHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    nobtn.style.position = "absolute";
    nobtn.style.left = newX + "px"; // Fixing position (left instead of right)
    nobtn.style.top = newY + "px";
});

yesbtn.addEventListener("click", function () {
    alert("Thank You");
});

// Mobile check
if (window.innerWidth <= 768) {
    h4.style.display = "none"; // Hide question text
    buttons.style.display = "none"; // Hide buttons
    h5.style.display = "block"; // Show error message
}
