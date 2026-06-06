// Typed text effect
const words = [
  'AI/ML Engineer',
  'Software Developer',
  'Data Analyst',
  'Master\'s Student @ UWA',
];
let wIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
  const word = words[wIdx];
  if (deleting) {
    el.textContent = word.slice(0, --cIdx);
  } else {
    el.textContent = word.slice(0, ++cIdx);
  }
  let delay = deleting ? 60 : 100;
  if (!deleting && cIdx === word.length) {
    delay = 2000;
    deleting = true;
  } else if (deleting && cIdx === 0) {
    deleting = false;
    wIdx = (wIdx + 1) % words.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.skill-card, .timeline-card, .project-card, .edu-card, .extras-card, .contact-card, .about-grid, .about-stats .stat'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent3)' : '';
  });
});
