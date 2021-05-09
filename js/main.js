const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
})


const portfolioSlider = new Swiper('.portfolio__slider', {
    wrapperClass: 'portfolio__wrapper',
    slideClass: 'portfolio__slide',
    navigation: {
        nextEl: '.portfolio__btns .portfolio__btn:last-child',
        prevEl: '.portfolio__btns .portfolio__btn:first-child',
    },
})

const linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.3;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
})

wow.init();