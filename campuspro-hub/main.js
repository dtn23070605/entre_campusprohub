// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth active nav highlighting on scroll
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Booking form submission
const bookingForm   = document.getElementById('bookingForm');
const formSuccess   = document.getElementById('formSuccess');

bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation
  const required = bookingForm.querySelectorAll('[required]');
  let valid = true;

  required.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = '#ef4444';
      valid = false;
    }
  });

  if (!valid) {
    bookingForm.querySelector('[required]:invalid, [required][style*="ef4444"]').focus();
    return;
  }

  // Show success state
  bookingForm.style.display = 'none';
  formSuccess.classList.add('visible');
  formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Reset form after success
function resetForm() {
  bookingForm.reset();
  bookingForm.style.display = 'block';
  formSuccess.classList.remove('visible');
  bookingForm.querySelectorAll('input, select, textarea').forEach(f => {
    f.style.borderColor = '';
  });
}

// Animate cards on scroll (subtle fade-in)
const animateOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      animateOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.service-card, .pkg, .why-card, .step').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = `opacity 0.4s ease ${(i % 4) * 60}ms, transform 0.4s ease ${(i % 4) * 60}ms`;
  animateOnScroll.observe(el);
});
