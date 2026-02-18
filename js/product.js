const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.setAttribute("aria-pressed", "true");
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");

  themeToggle.setAttribute("aria-pressed", isLight);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});
