document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Fade-in elements on scroll
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    fader.style.animationPlayState = 'paused';
    observer.observe(fader);
  });
});
