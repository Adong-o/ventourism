// JavaScript to change background images periodically
const images = [
    'https://i.postimg.cc/MZR6KyzH/homegeimg.jpg',
    'https://i.postimg.cc/mDwhCzZ7/house-landscape-pool-relaxation-garden-1140x530.jpg',  
    'https://i.postimg.cc/2SVvYwkM/zanzibar-beaches.jpg',
    'https://i.postimg.cc/prfCDBhq/top-things-to-do-in-tanzania.jpg',
    'https://i.postimg.cc/qqvqLJgS/Tanzania-Landmarks-Old-Fort-of-Zanzibar.jpg',
    'https://i.postimg.cc/vBHGRPM6/1024px-Gereza-at-Kilwa-Kisiwani.jpg',
    'https://i.postimg.cc/QdJMRK5w/tanzania-ngorongoro-crater.jpg',
    'https://i.postimg.cc/t4qbnSZv/DAR-ES-SALAAM.jpg',
    'https://i.postimg.cc/3wzz1nNT/dar-es-salaam-tourist-attractions.jpg'
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Initial background image set
  changeBackgroundImage();
  
  // Change background image every 5 seconds
  setInterval(changeBackgroundImage, 5000);
  



/*
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});*/


function toggleMenu() {
    var navLinks = document.querySelector('.navbar .nav-links');
    navLinks.classList.toggle('active');
}





document.addEventListener('DOMContentLoaded', function () {
    // Get all 'learn more' buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    // Add click event listener to each button
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the target modal ID from data-target attribute
            const targetModalId = this.getAttribute('data-target');
            const targetModal = document.getElementById(targetModalId);

            // Show the modal
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-button');

    // Add click event listener to each close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Hide the parent modal
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modals when clicking outside of them
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const feedbackContainer = document.querySelector('.feedback-container');
  
    // Optional: Pause animation on hover
    feedbackContainer.addEventListener('mouseover', () => {
      feedbackContainer.style.animationPlayState = 'paused';
    });
  
    feedbackContainer.addEventListener('mouseout', () => {
      feedbackContainer.style.animationPlayState = 'running';
    });
  });
  