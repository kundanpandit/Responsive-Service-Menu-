// Show the first content box by default
document.addEventListener('DOMContentLoaded', () => {
    // Find the first content box and show it
    const firstContent = document.querySelector('.content-box');
    if (firstContent) {
        firstContent.style.display = 'flex';
    }
});

document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('click', function() {
        const targetContentId = this.getAttribute('data-target');
        
        // Hide all content boxes
        document.querySelectorAll('.content-box').forEach(content => {
            content.style.display = 'none';
        });

        // Show the target content box
        const targetContent = document.getElementById(targetContentId);
        if (targetContent) {
            targetContent.style.display = 'flex';
        }
    });
});


document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('click', function() {
        const carousel = document.querySelector('.carousel');
        const buttonRect = this.getBoundingClientRect();
        const carouselRect = carousel.getBoundingClientRect();

        // Calculate the center position
        const scrollPos = buttonRect.left + buttonRect.width / 2 - carouselRect.width / 2;

        // Smoothly scroll to the position
        carousel.scrollBy({
            left: scrollPos - carouselRect.left,
            
            behavior: 'smooth'
        });
    });
});



