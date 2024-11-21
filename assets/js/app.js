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
// accordion
document.querySelectorAll('.accordion-item').forEach((accordionItem) => {
    accordionItem.addEventListener('click', () => {
        const content = accordionItem.querySelector('.accordion-content');
        const plusIcon = accordionItem.querySelector('.accordion-icon-plus');
        const minusIcon = accordionItem.querySelector('.accordion-icon-minus');

        if (accordionItem.classList.contains('active')) {
            content.style.maxHeight = '0';
            accordionItem.classList.remove('active', 'active-shadow');
        } else {
            document.querySelectorAll('.accordion-item').forEach((item) => {
                const otherContent = item.querySelector('.accordion-content');
                const otherPlusIcon = item.querySelector('.accordion-icon-plus');
                const otherMinusIcon = item.querySelector('.accordion-icon-minus');
                if (item !== accordionItem) {
                    otherContent.style.maxHeight = '0';
                    item.classList.remove('active', 'active-shadow');
                    otherPlusIcon.classList.remove('hidden');
                    otherMinusIcon.classList.add('hidden');
                }
            });
            content.style.maxHeight = content.scrollHeight + 'px';
            accordionItem.classList.add('active', 'active-shadow');
        }
        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');
    });
});


// current year
document.getElementById("year").textContent = new Date().getFullYear();

// video js
document.getElementById('toggle-button').addEventListener('click', function () {
    const image = document.getElementById('dream-image');
    const video = document.getElementById('dream-video');

    if (video.classList.contains('hidden')) {
        image.classList.add('hidden');
        video.classList.remove('hidden');
        video.play();
    } else {
        video.classList.add('hidden');
        image.classList.remove('hidden');
        video.pause();
        video.currentTime = 0;
    }
});
document.getElementById('toggle-button').addEventListener('click', function () {
    this.remove();
});
// slider
$('.slider-list').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: true,
    arrows: false,
});