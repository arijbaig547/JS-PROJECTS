var eyes = document.querySelectorAll(".eyes");

document.addEventListener("mousemove", function (e) {
    eyes.forEach(function (eye) {
        var x = (e.x / window.innerWidth) * 20 - 10; // Limit movement
        var y = (e.y / window.innerHeight) * 20 - 10;

        eye.querySelector(".pupil").style.transform = `translate(${x}px, ${y}px)`;
    });
});
