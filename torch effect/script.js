document.addEventListener("mousemove", function(event) {
    let torch = document.querySelector(".torch-area");
    let x = event.clientX;
    let y = event.clientY;
    
    // Update gradient position
    torch.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255, 245, 112, 0.3), rgba(0,0,0,0.9))`;
});
