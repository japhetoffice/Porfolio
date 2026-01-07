// Wait for the entire page (HTML/Images) to load first
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("fullCertImage");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll('.cert-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex"; // Using flex centers the image perfectly
            modalImg.src = this.src;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    
    // Close if they click the black area
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
});  