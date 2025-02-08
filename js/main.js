// js/main.js
document.addEventListener("DOMContentLoaded", function() {
  // Slider-Logik
  const slides = document.querySelectorAll('.offer-slider .slide');
  let currentSlide = 0;
  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      slides[currentSlide].classList.add('vibrate');
      setTimeout(() => {
        slides[currentSlide].classList.remove('vibrate');
      }, 500);
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 4000);
  }
});
