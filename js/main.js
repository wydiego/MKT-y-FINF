// ========== NAVBAR TOGGLE (mobile) ==========
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ========== SCROLL SPY (active nav link) ==========
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');

function onScroll() {
  let current = '';
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // Navbar shadow
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// ========== WHATSAPP FLOAT ==========
const whatsappBtn = document.querySelector('.whatsapp-float');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // Show button after scrolling past hero
  if (scrollY > 500) {
    whatsappBtn.style.transform = 'scale(1)';
    whatsappBtn.style.opacity = '1';
  } else {
    whatsappBtn.style.transform = 'scale(0.8)';
    whatsappBtn.style.opacity = '0.6';
  }
  lastScrollY = scrollY;
}, { passive: true });
