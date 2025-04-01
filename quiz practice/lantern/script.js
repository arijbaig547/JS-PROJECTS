var btn = document.getElementById("btn");
var lantern = document.getElementById("lantern");
var lantern1 = document.getElementById("lantern1");
var container = document.querySelector(".container");
var moon = document.getElementById("moon");
var mosque = document.getElementById("mosque");
var mosuqe = document.querySelector(".mosque");
var h2=document.querySelector(".text")

btn.addEventListener("click", animateLantern);

function animateLantern() {
    btn.style.display = "none";

    // 🌟 Stop previous animations before starting new one

    // 🌌 Background night transition
    gsap.to("body", {
        backgroundColor: "#060d1f", // Deep night blue
        duration: 1.5, 
        ease: "power1.inOut"
    });

    // 🎇 Lantern animation
    gsap.fromTo("#lantern, #lantern1",
        { scale: 0, opacity: 0, y: 50 },
        { scale: 1.5, opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut" }
    );

    // 🏮 Swaying motion of lanterns
    gsap.to("#lantern, #lantern1", {
        rotation: 2,
        x: 20,
        transformOrigin: "center bottom",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        markers:true
    });

    // 🌙 Moon animation (Entry)
    gsap.fromTo("#moon",
        { x: -250, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // 🌙 Moon floating + glowing effect (Continuous)


    mosuqe.style.display = "block";
    h2.style.display="block"
    gsap.fromTo("#mosque",
        { y: 200, opacity: 0, scale: 1.5 },
        { y: 0, opacity: 1, duration: 2, ease: "power2.out", scale: 1 }
    );
    gsap.fromTo(".text h2",
        {y:390,opacity:0},
        {y:-60,opacity:1,duration:3,ease:"power1.out"}
    )
}
