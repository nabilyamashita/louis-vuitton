window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroImage = document.querySelector('.hero1-img');

    heroImage.style.transform = 'scale(' + (1 + scrollPosition / 6000) + ')';
});
