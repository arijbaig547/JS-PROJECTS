const images=document.querySelectorAll(".slides")
let imageCounter=0;


function nextImage() {
    imageCounter++; // Move to the next image
    if (imageCounter >= images.length) {
        imageCounter = 0; // Loop back to the first image
    }

    images.forEach((image) => {
        image.style.display = "none";
    });

    images[imageCounter].style.display="block"
}
    
