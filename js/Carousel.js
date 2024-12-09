const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Dynamically calculate the width of the current slide
function getSlideWidth() {
    return slides[0].getBoundingClientRect().width; // Get width of the first slide
}

let currentSlide = 1;

// Set the initial position
track.style.transform = `translateX(-${getSlideWidth() * currentSlide}px)`;

function updateCarousel(index) {
    const slideWidth = getSlideWidth();  // Recalculate slide width during the update
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    track.addEventListener('transitionend', () => {
        if (slides[index].alt === `image_${slides.length-1}`) {
            track.style.transition = 'none';
            currentSlide = slides.length - 2;
            track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        }
        if (slides[index].alt === 'image_1') {
            track.style.transition = 'none';
            currentSlide = 1;
            track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        }
    }, { once: true });
}

prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    updateCarousel(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    updateCarousel(currentSlide);
});

// Adjust carousel on window resize
window.addEventListener('resize', () => {
    const slideWidth = getSlideWidth();  // Recalculate slide width on resize
    track.style.transition = 'none';
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
});