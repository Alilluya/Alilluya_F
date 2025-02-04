document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll('.photo');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    // Функция для показа текущей фотографии
    function showPhoto(index) {
        photos.forEach((photo, i) => {
            if (i === index) {
                photo.classList.add('visible');
            } else {
                photo.classList.remove('visible');
            }
        });
    }

    // Показываем первую фотографию при загрузке
    showPhoto(currentIndex);

    // Обработчик для кнопки "Вперед"
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    });

    // Обработчик для кнопки "Назад"
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    });
});