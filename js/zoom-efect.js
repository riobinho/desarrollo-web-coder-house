document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-to-zoom');
  images.forEach(img => {
    img.style.transition = 'transform 0.3s ease-in-out';
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
});
