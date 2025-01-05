// Carousel Logic
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentSlide = 0;

// Show Slide with fade effect
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove 'active' class from all slides
        if (i === index) {
            slide.classList.add('active'); // Add 'active' class to the current slide
        }
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

// Next Slide
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Previous Slide
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto Slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
