// subpages/scripts/poody-token.js

// Function to detect when sections are in view and trigger animation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
