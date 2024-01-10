document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
  
    function showSlide(index) {
      const translateValue = -index * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
      showSlide(currentIndex);
    }
  
    // Example: Next and previous slide buttons
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', nextSlide);
  
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.addEventListener('click', prevSlide);
  
    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);
  });
  