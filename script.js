document.addEventListener("DOMContentLoaded", function () {
    // ================== MENÚ RESPONSIVO ==================
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // ================== BOTÓN DE WHATSAPP ==================
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    
    whatsappBtn.addEventListener("mouseenter", function () {
        whatsappBtn.style.transform = "scale(1.2)";
    });
    
    whatsappBtn.addEventListener("mouseleave", function () {
        whatsappBtn.style.transform = "scale(1)";
    });

    // ================== VISUALIZADOR DE MÚSICA ==================
    const visualizerBars = document.querySelectorAll(".visualizer div");
    let isPlaying = false;

    function animateVisualizer() {
        if (isPlaying) {
            visualizerBars.forEach((bar, index) => {
                let delay = index * 0.1;
                bar.style.animation = `wave 1s infinite ${delay}s ease-in-out`;
            });
        } else {
            visualizerBars.forEach(bar => {
                bar.style.animation = "none";
            });
        }
    }

    const audio = document.querySelector("audio");
    audio.addEventListener("play", function () {
        isPlaying = true;
        animateVisualizer();
    });
    
    audio.addEventListener("pause", function () {
        isPlaying = false;
        animateVisualizer();
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Mensaje enviado correctamente. ¡Gracias!";
    
    // Reiniciar formulario
    document.getElementById("contactForm").reset();
});
