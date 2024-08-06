const images = document.querySelectorAll('.hero-images img');
let currentImageIndex = 0;

function rotateImages() {
    images.forEach(img => img.classList.remove('active'));

    images[currentImageIndex].classList.add('active');

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(rotateImages, 5000);

rotateImages();



//to be removed soon.
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Form submitted successfully!'); 
});

function toggleMenu() {
    var navLinks = document.querySelector('.navbar .nav-links');
    navLinks.classList.toggle('active');
}
