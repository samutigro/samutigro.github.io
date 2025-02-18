

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript caricato con successo!");

    // Se la navbar contiene link interni, attiva lo scroll fluido
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault(); // Previene il salto immediato
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});