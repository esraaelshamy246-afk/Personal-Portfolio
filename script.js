// تغيير لون الـ Navbar عند الـ Scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#020617";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "none";
    }

});

const words = [
    "Front-End Developer",
    "Creative Web Designer",
    "Vue.js Developer",
    "JavaScript Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// تأثير ظهور العناصر عند الـ Scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


// رسالة عند إرسال الفورم

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();

});


// زر الرجوع لأعلى

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.id = "topBtn";

document.body.appendChild(btn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        btn.style.display = "block";

    } else {

        btn.style.display = "none";

    }

});

btn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});