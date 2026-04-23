const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.tl-card, .year-pill, .section-label, .section-title, .section-desc, .closing-script, .closing-quote, .closing-author, .closing-name'
).forEach(el => io.observe(el));
