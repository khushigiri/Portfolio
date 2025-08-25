
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    this.reset();
});


const typedText = document.getElementById("typed-text");
const textArray = ["Aspiring Software Developer", "Frontend & Backend Enthusiast", "Problem Solver", "Tech Explorer"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    if (textIndex >= textArray.length) textIndex = 0;
    currentText = textArray[textIndex];

    if (!isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // pause before delete
            return;
        }
    } else {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
