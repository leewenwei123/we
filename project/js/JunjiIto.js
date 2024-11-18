document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
  
    function checkVisibility() {
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
  });