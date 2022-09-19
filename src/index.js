import _ from 'lodash';
import "./style.scss";
import "./JavaScript/another.js";


// Navigation bar effects on scroll
window.addEventListener("scroll", (() => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}))