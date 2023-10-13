// AOS
AOS.init({
  duration: 700,
  easing: "ease",
  once: true,
  disable: "mobile",
});

// Light and dark
const toggleTheme = document.getElementById("toggle-mode");
const themeStyle = document.getElementById("theme-style");

// Check user's preferred mode (e.g., from local storage)
const userMode = localStorage.getItem("dashboard-mode");

// Apply the user's mode or default to light mode
if (userMode === "dark") {
  themeStyle.href = "./static/css/dark-style.css";
}

// Toggle between light and dark mode
toggleTheme.addEventListener("click", () => {
  if (themeStyle.href.includes("dark")) {
    themeStyle.href = "./static/css/style.css";
    localStorage.setItem("dashboard-mode", "light");
  } else {
    themeStyle.href = "./static/css/dark-style.css";
    localStorage.setItem("dashboard-mode", "dark");
  }
});
