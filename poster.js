// Lightbox functionality
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    // Open lightbox when an image is clicked
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.dataset.src; // Use the full-size image
        });
    });

    // Close lightbox when the close button is clicked
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
// Smooth scroll to the gallery section
function scrollToGallery() {
    const gallerySection = document.getElementById('gallery-section');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
}