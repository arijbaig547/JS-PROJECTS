var input = document.getElementById("text");
var btn = document.getElementById("btn");
var lantern = document.getElementById("lantern");
var lantern1 = document.getElementById("lantern1");
var container=document.querySelector(".container")

btn.addEventListener("click", checkInput);

function checkInput() {
    if (input.value.trim() !== "") {
        input.style.display = "none";
        btn.style.display = "none";

        // Lanterns ko visible karo
        lantern.style.opacity = "1";
        lantern1.style.opacity = "1";

        animateLantern();
    } else {
        alert("Fill the Field First");
    }
}

function animateLantern() {
    container.style.backgroundImage = "url('https://img.freepik.com/free-photo/colourful-horizon-lights-sky_23-2148283416.jpg?t=st=1742598700~exp=1742602300~hmac=b0a766124a8779bcd79f163c982c816e5176ca7c4b81dc61b476b42184c3124d&w=740')"
    gsap.fromTo("#lantern, #lantern1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" }
    );

    gsap.to("#lantern, #lantern1", {
        rotation: 10,
       
        transformOrigin: "center bottom",
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
    });
}
