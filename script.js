 // Array of language options and their translations
 const languages = [
    { code: 'ph', text: "KAMUSTA, MY NAME IS FLORANTE FABROA JR. WEB DEVELOPER BASED IN POLA, PHILIPPINES" },
    { code: 'en', text: "HELLO, MY NAME IS FLORANTE FABROA JR. WEB DEVELOPER BASED IN POLA, PHILIPPINES" },
    { code: 'es', text: "HOLA, MI NOMBRE ES FLORANTE FABROA JR. DESARROLLADOR WEB CON BASE EN POLA, FILIPINAS" },
    { code: 'fr', text: "BONJOUR, MON NOM EST FLORANTE FABROA JR. DÉVELOPPEUR WEB BASÉ À POLA, PHILIPPINES" },
    { code: 'jp', text: "こんにちは, MON NOM EST FLORANTE FABROA JR. DÉVELOPPEUR WEB BASÉ À POLA, PHILIPPINES" },
    { code: 'ko', text: "안녕하세요, 제 이름은 플로란트 파브로아 주니어입니다. 필리핀 폴라에 기반한 웹 개발자입니다." },
    { code: 'de', text: "HALLO, MEIN NAME IST FLORANTE FABROA JR. WEBENTWICKLER MIT SITZ IN POLA, PHILIPPINEN" }, // German translation
    { code: 'it', text: "CIAO, IL MIO NOME È FLORANTE FABROA JR. SVILUPPATORE WEB CON SEDE A POLA, FILIPPINE" }, // Italian translation
    { code: 'ru', text: "ПРИВЕТ, МЕНЯ ЗОВУТ ФЛОРАНТЕ ФАБРОА МЛ. ВЕБ-РАЗРАБОТЧИК, ОСНОВАННЫЙ В ПОЛА, ФИЛИППИНЫ" }, // Russian translation
];
let currentIndex = 0;
function changeHelloText() {
    const helloText = document.getElementById('helloText');
    helloText.textContent = languages[currentIndex].text.split(',')[0]; 
    currentIndex = (currentIndex + 1) % languages.length;
}
setInterval(changeHelloText, 2000);

// mobile button change
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Function to close mobile menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 541) { // Adjust this value based on your media query breakpoint
            mobileMenu.classList.remove('active');
        }
    });
});
document.querySelectorAll('.navbar-ul a, .mobile-menu-ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// emails se
(function(){
    emailjs.init("5x_qqKvKTErkS65kA"); // Replace with your actual User ID
})();

 // Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent default form submission

     // Send email using EmailJS
    emailjs.send('service_b8mxik5', 'template_jbkwghl', {
        name: document.getElementById('name').value,
        last: document.getElementById('last').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        alert('Your message has been sent successfully!');
        console.log('Success!', response.status, response.text);
    }, function(error) {
        alert('Failed to send the message. Please try again later.');
        console.error('Error:', error);
    });
    
});

/*
 JS to toggle scroll axis styles
*/
const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});
const sections = document.querySelectorAll('body');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
    });
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
