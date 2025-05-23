const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.scroll-fade')?.forEach(el => observer.observe(el));
