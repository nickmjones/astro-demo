document.addEventListener("DOMContentLoaded", function () {
  const fadeItems = document.querySelectorAll(".fade-item");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  fadeItems.forEach((item) => {
    observer.observe(item);
  });
});
