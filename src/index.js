// ============ Imports ============ \\
import _ from 'lodash';
import "./style.scss";
import "./JavaScript/another.js";




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