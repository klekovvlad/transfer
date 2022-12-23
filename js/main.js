const swiper = new Swiper('.services__slider', {
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        }
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});
const feedback = new Swiper('.feedback__wrapper', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    centeredSlides: true,
    effect: 'fade',
    loop: 'true',
    navigation: {
        nextEl: '.swiper-next'
    },
    pagination: {
        el: '.pagination',
        type: 'bullets',
    },
});
const feedbackItems = document.querySelectorAll('.feedback__item');
const pagination = document.querySelectorAll('.swiper-pagination-bullet');
let x = 0;
if ((feedbackItems.length - 2) < 10) {
    x = '0' + (feedbackItems.length - 2);
}else {
    x = (feedbackItems.length - 2)
}

pagination[(feedbackItems.length - 2) - 1].dataset.last = x;

//Анимация на карточках в блоке Наши услуги
const servicesItem = document.querySelectorAll('.services__item');
servicesItem.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.classList.add('services__item-active');
    });
    el.addEventListener('mouseout', () => {
        el.classList.remove('services__item-active');
    });
});

//Анимация раскрытия FAQ
const faqItem = document.querySelectorAll('.faq__item');
const faqAnswer = document.querySelectorAll('.faq__answer');
const faqIcon = document.querySelectorAll('.faq__question > .icon');
faqItem.forEach(function(el, index) {
    el.addEventListener('click', () => {
        let j = 0;
        while(j <= faqItem.length) {
            faqItem[j].style.paddingBottom = '20px';
            faqAnswer[j].classList.remove('faq__answer-active');
            faqIcon[j].classList.remove('faq__icon-active');
            j++;
            faqItem[index].style.paddingBottom = faqAnswer[index].offsetHeight + 20 + 'px';
            faqAnswer[index].classList.add('faq__answer-active');
            faqIcon[index].classList.add('faq__icon-active');
        }
    })
})

//Мобильное меню
const mobileButton = document.querySelector('.header__buttons-mobile');
const mobileMenu = document.querySelector('.mobile__menu');
const header = document.querySelector('.header');
const main = document.querySelector('.main');

mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile__menu-active');
    header.classList.toggle('header-fixed');
    main.classList.toggle('main-fixed');
})