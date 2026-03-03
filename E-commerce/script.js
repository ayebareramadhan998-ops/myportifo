// ================= SWIPER =================
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 1200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
});

// ================= SCROLL TO PRODUCTS =================
const exploreButtons = document.querySelectorAll('.explore-btn');
const productsSection = document.querySelector('.products-section');

exploreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ================= EMAILJS CONTACT FORM =================

// Make sure to include this **once** in your HTML, preferably before </body>:
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual EmailJS public key

const contactForm = document.getElementById('contact-form'); // your form ID
const formMessage = document.getElementById('form-message'); // message placeholder

contactForm.addEventListener('submit', function(e){
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      formMessage.innerText = "Message sent successfully!";
      formMessage.style.color = "green";
      contactForm.reset();
    })
    .catch((error) => {
      formMessage.innerText = "Oops! Something went wrong. Try again.";
      formMessage.style.color = "red";
      console.error("EmailJS Error:", error);
    });
});