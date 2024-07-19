window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
