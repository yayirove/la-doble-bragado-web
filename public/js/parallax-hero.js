console.log('✅ Parallax cargado');

window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollTop <= windowHeight) {
    const offset = scrollTop * 0.3;
    bg.style.transform = `translateY(${offset}px)`;
  }
});
