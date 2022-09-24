// ============ Imports ============ \\
// JS Scripts

// Library
import _ from 'lodash';
// SCSS 
import "./style.scss";






// ============ Navigation bar effects on scroll ============ \\
window.addEventListener("scroll", (() => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}));






// ============ Services section - Modal ============ \\ 
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

let modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
};

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});







// ============ Portfolio Section - Modal ============ \\ 
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

let portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});






// ============ Our-clients > Initialize Swiper ============ \\ 
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ============ Website Dark/Light Theme ============ \\


// ============ Scroll to top Button ============ \\ 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});