// js/main.js
document.addEventListener("DOMContentLoaded", function() {
    // Slider-Logik
    const slides = document.querySelectorAll('.offer-slider .slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 4000);
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      // "Vibrations"-Effekt hinzufügen
      slides[currentSlide].classList.add('vibrate');
      setTimeout(() => {
        slides[currentSlide].classList.remove('vibrate');
      }, 500);
      
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  });
  