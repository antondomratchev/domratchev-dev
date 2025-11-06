// Scroll-based animation for floating symbols
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollDelta = scrollY - lastScrollY;
  
  const symbols = document.querySelectorAll('.floating-symbol');
  
  symbols.forEach((symbol, index) => {
    const speed = 0.5 + (index * 0.2);
    const currentTransform = symbol.style.transform || 'translate(0, 0)';
    
    // Parse current transform or start from 0
    const match = currentTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
    const currentX = match ? parseFloat(match[1]) : 0;
    const currentY = match ? parseFloat(match[2]) : 0;
    
    // Calculate new position based on scroll
    const newX = currentX + (scrollDelta * speed * (index % 2 === 0 ? 1 : -1));
    const newY = currentY + (scrollDelta * speed);
    
    symbol.style.transform = `translate(${newX}px, ${newY}px)`;
  });
  
  lastScrollY = scrollY;
});

// Smooth scroll for anchor links
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