document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    const closeBtn = document.querySelector(".close-modal");

    function setupModalListeners() {
        document.querySelectorAll('.cert-img').forEach(img => {
            img.onclick = function() {
                modal.style.display = "flex";
                modalImg.src = this.src;
            };
        });
    }

    // Load Certifications from Database
    async function fetchCertifications() {
        try {
            const response = await fetch('/api/certifications'); 
            const certs = await response.json();
            const grid = document.querySelector('.certificate-grid'); // Fixed class name
            
            grid.innerHTML = certs.map(cert => `
                <div class="cert-item">
                    <img src="${cert.image_path}" alt="${cert.title}" class="cert-img">
                    <div class="cert-overlay">
                        <span>${cert.category}</span>
                    </div>
                </div>
            `).join('');

            setupModalListeners(); // Attach modal logic to new images
        } catch (error) {
            console.error("Database fetch failed, showing static content.");
            setupModalListeners(); 
        }
    }

    fetchCertifications();

    // Close Modal Logic
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
});