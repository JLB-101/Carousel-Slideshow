// script.js
/* Developed by: JLB-101 */
let currentIndex = 0;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const toggleMenu = document.querySelector('.toggle-menu');
const offcanvasMenu = document.querySelector('.offcanvas-menu');
const closeMenu = document.querySelector('.close-menu');

function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function showSlide(index) {
    const totalItems = items.length;
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators(currentIndex);
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide (optional)
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

toggleMenu.addEventListener('click', () => {
    offcanvasMenu.classList.toggle('offcanvas-active');
});

closeMenu.addEventListener('click', () => {
    offcanvasMenu.classList.remove('offcanvas-active');
});
