const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(n) {
  items.forEach((item, index) => {
    item.style.display = index === n ? 'block' : 'none';
  });
  currentSlide = n;
}

showSlide(currentSlide);

prevBtn.addEventListener('click', () => {
  currentSlide = currentSlide === 0 ? items.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = currentSlide === items.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Add an automatic carousel
const autoCarousel = () => {
  nextBtn.click();
};

// Call the autoCarousel function every 3 seconds (3000 milliseconds)
setInterval(autoCarousel, 5000);

const cardTrack = document.querySelector('.card-track');
const cardItems = document.querySelectorAll('.card-item');
const prevBtn1 = document.querySelector('.prev-btn1');
const nextBtn1 = document.querySelector('.next-btn1');

let currentSlide1 = 0;

function moveSlide(offset) {
  currentSlide1 = currentSlide1 + offset;
  if (currentSlide1 < 0) {
    currentSlide1 = cardItems.length - 1;
  } else if (currentSlide1 === cardItems.length) {
    currentSlide1 = 0;
  }
  cardTrack.style.transform = `translateX(-${currentSlide1 * cardItems[0].clientWidth}px)`;
}

prevBtn1.addEventListener('click', () => moveSlide(-1));
nextBtn1.addEventListener('click', () => moveSlide(1));

// Automatic carousel functionality
const autoCarousel1 = () => {
  moveSlide(1); // Move to the next slide
};

// Call the autoCarousel function every 3 seconds (3000 milliseconds)
setInterval(autoCarousel1, 3000);
