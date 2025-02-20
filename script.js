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

    // Caricamento dinamico del file Google Docs in formato testo
    const researchContent = document.getElementById("research-content");
    const DOC_ID = "1MOTLD97iYDjoBcu3AZH2y0iDZQxbFzWMWVFgxE2vgvg"

    if (researchContent) {  // Verifica che l'elemento esista nella pagina prima di procedere
        fetch("https://docs.google.com/document/d/1MOTLD97iYDjoBcu3AZH2y0iDZQxbFzWMWVFgxE2vgvg/export?format=html")
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, "text/html");

            // Rimuove il <head> (dove c'è il CSS di Google)
            doc.querySelector("head")?.remove();

            // Prende solo il <body> senza classi inutili
            let cleanContent = doc.body.innerHTML;

            // Inserisce il contenuto nella pagina
            researchContent.innerHTML = cleanContent;
        })
        .catch(error => {
            console.error("Error loading research data:", error);
            researchContent.textContent = "Failed to load research data.";
        });
    }
});