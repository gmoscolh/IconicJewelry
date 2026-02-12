document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".hero-carousel img");
  const title = document.querySelector(".hero-carousel .tag");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;

  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
    title.textContent = images[i].dataset.title;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  const reviews = document.querySelectorAll(".review");
  let reviewIndex = 0;

  function showReview(i) {
    reviews.forEach(r => r.classList.remove("active"));
    reviews[i].classList.add("active");
  }

  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    showReview(reviewIndex);
  }, 4000);

  const faders = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));

});
