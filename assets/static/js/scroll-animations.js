// Intersection Observer — drives .reveal elements and staggered children
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Staggered children — add delay to each .stagger-child inside a .stagger-parent
document.querySelectorAll('.stagger-parent').forEach((parent) => {
  parent.querySelectorAll('.stagger-child').forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
    revealObserver.observe(child);
  });
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'text-primary',
            link.getAttribute('href') === `#${entry.target.id}`
          );
          link.classList.toggle(
            'text-secondary',
            link.getAttribute('href') !== `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));
