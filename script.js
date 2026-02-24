const wrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".nav-dot");

let index = 0;
const totalSlides = slides.length;
let autoSlide;

/* Move to slide */
function showSlide(i) {
    index = i;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    wrapper.style.transform = `translateX(-${index * 100}%)`;
    wrapper.style.transition = "transform 0.6s ease";

    /* Update dots */
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

/* Next & Prev */
nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
    resetAuto();
});

prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
    resetAuto();
});

/* Dot click */
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
        resetAuto();
    });
});

/* Auto slide */
function startAuto() {
    autoSlide = setInterval(() => {
        showSlide(index + 1);
    }, 5000);
}

function resetAuto() {
    clearInterval(autoSlide);
    startAuto();
}

/* Pause on hover */
const container = document.querySelector(".slider-container");

container.addEventListener("mouseenter", () => clearInterval(autoSlide));
container.addEventListener("mouseleave", startAuto);

/* Init */
showSlide(0);
startAuto();