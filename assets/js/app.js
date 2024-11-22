// Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("translate-x-0");
    document.body.classList.toggle("overflow-hidden");
    hamburgerIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
});

// Accordion
document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        const icons = item.querySelectorAll('.accordion-icon');
        const isActive = item.classList.toggle('active');

        document.querySelectorAll('.accordion-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = '0';
                i.querySelectorAll('.accordion-icon-plus').forEach(icon => icon.classList.remove('hidden'));
                i.querySelectorAll('.accordion-icon-minus').forEach(icon => icon.classList.add('hidden'));
            }
        });

        content.style.maxHeight = isActive ? content.scrollHeight + 'px' : '0';
        icons.forEach(icon => icon.classList.toggle('hidden'));
    });
});

// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Video Toggle
const toggleBtn = document.getElementById('toggle-button');
const image = document.getElementById('dream-image');
const video = document.getElementById('dream-video');

toggleBtn.addEventListener('click', () => {
    const isHidden = video.classList.toggle('hidden');
    image.classList.toggle('hidden', !isHidden);
    if (!isHidden) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }
    toggleBtn.remove();
});

// Slider
$('.slider-list').slick({
    dots: false,
    infinite: true,
    speed: 18000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: true,
    arrows: false,
});

// Swiper Slider
new Swiper(".mySwiper2", {
    grabCursor: false,
    effect: "creative",
    creativeEffect: {
        prev: { shadow: false, translate: [0, 0, -400] },
        next: { translate: ["90%", 0, 0] },
    },
    slideToClickedSlide: true,
    speed: 1500,
    loop: true,
    infinite: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
});
