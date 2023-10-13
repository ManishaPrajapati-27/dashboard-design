// AOS
AOS.init({
  duration: 700,
  easing: "ease",
  once: true,
  disable: "mobile",
});

// Sidebar-toggle

// variables
const toggle = document.querySelector(".toggle-bar");
const closeSide = document.querySelector(".side-close");
const dashboard = document.querySelector(".dashboard");

toggle.addEventListener("click", () => {
  dashboard.classList.toggle("sb-active");
});

closeSide.addEventListener("click", () => {
  dashboard.classList.remove("sb-active");
});
