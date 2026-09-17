const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
  if (isIntersecting) { target.classList.add('is-visible'); observer.unobserve(target); }
}), { threshold: 0.16 });
reveals.forEach((element) => observer.observe(element));
if (window.location.hash) requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
