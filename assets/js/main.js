/*===== MENU SHOW Y HIDDEN =====*/
const navMenu=document.getElementById('nav-menu'),
    toggleMenu=document.getElementById('nav-toggle'),
    closeMenu=document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove('active');
        }
    });
}

// emails js
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_bqmd109','template_zzpny6a','#contact-form','eWmklf22qweZEz2Zc')
        .then(() =>{
            contactMessage.textContent = 'Message sent successfully ✅'
            setTimeout(() =>{
                contactMessage.textContent =''
            }, 5000)
        }, () =>{
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__profession', {})
sr.reveal('.home__data', {delay: 100})
sr.reveal('.home__img', {delay: 200})
sr.reveal('.home__social-link', {delay: 300})
sr.reveal('.home__button', {delay: 300})

/*SCROLL ABOUT*/
sr.reveal('.section-subtitle', {})
sr.reveal('.section-title', {delay: 100})
sr.reveal('.about__description', {delay: 200})
sr.reveal('.about__img', {delay: 300})
// sr.reveal('.about__subtitle', {delay: 300})
// sr.reveal('.about__profession', {delay: 400})
// sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__information-data', {delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__bar', {delay: 150})
sr.reveal('.skills__number', {delay: 150})


sr.reveal('.education__rounder', {delay: 150})
sr.reveal('.education__line', {delay: 150})
sr.reveal('.education__rounder', {delay: 100})
sr.reveal('.education__year', {delay: 200})
sr.reveal('.education__university', {delay: 250})
sr.reveal('.education__race', {delay: 200})
sr.reveal('.education__speciality', {delay: 250})

sr.reveal('.services section', {})
sr.reveal('.services__content', {delay: 150})

/*SCROLL PORTFOLIO*/
sr.reveal('.works section', {})
sr.reveal('.works__img', {interval: 300})

/*SCROLL CONTACT*/
sr.reveal('.contact section', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 400})

