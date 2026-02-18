// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
 menuToggle.classList.toggle('active');
 navLinks.classList.toggle('active');
});
// Close menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
 item.addEventListener('click', () => {
 menuToggle.classList.remove('active');
 navLinks.classList.remove('active');
 });
});
// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 const target = document.querySelector(this.getAttribute('href'));
 if (target) {
 target.scrollIntoView({
 behavior: 'smooth',
 block: 'start'
 });
 }
 });
});
// ===== Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
 const currentScroll = window.pageYOffset;

 // Change navbar background
 if (currentScroll > 100) {
 navbar.style.background = 'rgba(0, 0, 0, 0.98)';
 navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
 } else {
 navbar.style.background = 'rgba(0, 0, 0, 0.95)';
 navbar.style.boxShadow = 'none';
 }

 lastScroll = currentScroll;
});
// ===== Intersection Observer for Animations =====
const observerOptions = {
 threshold: 0.1,
 rootMargin: '0px 0px -100px 0px'
};
const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.style.opacity = '1';
 entry.target.style.transform = 'translateY(0)';
 }
 });
}, observerOptions);
// Observe portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item, index) => {
 item.style.opacity = '0';
 item.style.transform = 'translateY(30px)';
 item.style.transition = `all 0.6s ease ${index * 0.1}s`;
 observer.observe(item);
});
// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
 card.style.opacity = '0';
 card.style.transform = 'translateY(30px)';
 card.style.transition = `all 0.6s ease ${index * 0.1}s`;
 observer.observe(card);
});
// Observe contact cards
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach((card, index) => {
 card.style.opacity = '0';
 card.style.transform = 'translateY(30px)';
 card.style.transition = `all 0.6s ease ${index * 0.1}s`;
 observer.observe(card);
});
// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const highlightNavigation = () => {
 const scrollY = window.pageYOffset;

 sections.forEach(section => {
 const sectionHeight = section.offsetHeight;
 const sectionTop = section.offsetTop - 100;
 const sectionId = section.getAttribute('id');
 const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

 if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
 navLink.style.color = '#ffffff';
 } else if (navLink) {
 navLink.style.color = '#999999';
 }
 });
};
window.addEventListener('scroll', highlightNavigation);
// ===== Portfolio Item Click Effect =====
portfolioItems.forEach(item => {
 item.addEventListener('click', function() {
 // Add a subtle click effect
 this.style.transform = 'scale(0.98)';
 setTimeout(() => {
 this.style.transform = '';
 }, 200);
 });
});
// ===== Console Welcome Message =====
console.log('%c بك ًمرحبا'!,' font-size: 20px; font-weight: bold; color: #ffffff;');
console.log('%cFrontend Developer Portfolio', 'font-size: 14px; color: #999999;');
co; px12 :size-font ', 'إذا كنت مھتماً بالتواصل، استخدم نموذج الاتصال في الأسفلc%('log.console