document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Prevent transitions during initialization
    track.style.transition = "none";
    track.style.transform = `translateX(-${slideWidth}px)`;

    let currentIndex = 1;

    function moveToSlide(index) {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    function handleNext() {
        if (currentIndex >= slides.length - 1) {
            // Seamless jump to the first actual slide
            track.style.transition = "none";
            currentIndex = 1;
            track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
        currentIndex++;
        requestAnimationFrame(() => moveToSlide(currentIndex));
    }

    function handlePrev() {
        if (currentIndex <= 0) {
            // Seamless jump to the last actual slide
            track.style.transition = "none";
            currentIndex = slides.length - 2;
            track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
        currentIndex--;
        requestAnimationFrame(() => moveToSlide(currentIndex));
    }

    nextButton.addEventListener("click", handleNext);
    prevButton.addEventListener("click", handlePrev);

    // Auto adjust when the window resizes
    window.addEventListener("resize", () => {
        const newSlideWidth = slides[0].getBoundingClientRect().width;
        track.style.transition = "none";
        track.style.transform = `translateX(-${newSlideWidth * currentIndex}px)`;
    });

    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            nextButton.click();
        } else if (event.key === "ArrowLeft") {
            prevButton.click();
        }
    });

    // Re-enable transition after initial setup
    setTimeout(() => {
        track.style.transition = "transform 0.5s ease-in-out";
    }, 0); // Re-enable transition immediately after initial render
});
