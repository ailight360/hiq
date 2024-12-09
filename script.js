$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});


$(window).scroll(function() {

    if ($(this).scrollTop() > 190){  
        $('#nav').addClass("fixed");
    }
    else{
        $('#nav').removeClass("fixed");
    }
});

/* product Slider*/

document.querySelectorAll('.best-slider-container').forEach((sliderContainer, index) => {
  let currentIndex = 0;
  const slides = sliderContainer.querySelectorAll('.best-slide');
  const dots = sliderContainer.querySelectorAll('.best-dot');
  const totalSlides = slides.length;
  
  function updateSlider() {
    const slider = sliderContainer.querySelector('.best-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Event listeners for navigation
  sliderContainer.querySelector('.best-right').addEventListener('click', nextSlide);
  sliderContainer.querySelector('.best-left').addEventListener('click', prevSlide);

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Initialize the slider
  updateSlider();
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;
    const slideInterval = 3000; // 3 seconds

    const changeSlide = () => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove("active");
        
        // Move to the next slide or loop back to the first
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to the new slide
        slides[currentSlide].classList.add("active");
    };

    // Start the slide interval
    setInterval(changeSlide, slideInterval);
});
