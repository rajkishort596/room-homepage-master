//get the hambergur menu
const mobile_nav = document.querySelector(".menu");
const nav_header = document.querySelector(".main__container");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

// Get all the slides
const slides = document.querySelectorAll(".slide");

// Set the index of the current slide
let currentSlide = 0;

// Get the previous and next buttons
const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");

// Function to show the current slide
const showSlide = () => {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slides[currentSlide].style.display = "grid";
};

// Function to go to the next slide
const nextSlide = () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
};

// Function to go to the previous slide
const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
};

// Attach event listeners to the previous and next buttons
prevBtn.forEach((btn) => {
  btn.addEventListener("click", prevSlide);
});

nextBtn.forEach((btn) => {
  btn.addEventListener("click", nextSlide);
});

// Show the initial slide
showSlide();
