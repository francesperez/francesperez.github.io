let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}, 3000);

function updateCarousel() {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
