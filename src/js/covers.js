const coversList = document.querySelectorAll('.covers-list-item');
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '-25% 0px -25% 0px',
  threshold: 0,
});
const coversSection = document.querySelector('.covers-section');
observer.observe(coversSection);

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      coversList.forEach(item => {
        item.style.animationDuration = '20s';
      });
    } else {
      coversList.forEach(item => {
        item.style.animationDuration = '0s';
      });
    }
  });
}
