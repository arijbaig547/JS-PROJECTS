var img = document.querySelector("img");

document.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;

    // Background torch effect
    document.body.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 10%, rgba(0,0,0,1) 50%)`;

    // Increase brightness when mouse moves
    img.style.filter = "brightness(1.5)";

    // Reset brightness after some time
    clearTimeout(img.brightnessTimeout);
    img.brightnessTimeout = setTimeout(() => {
        img.style.filter = "brightness(1)";
    }, 200);
});

