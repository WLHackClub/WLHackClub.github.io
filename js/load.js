const getTheme = localStorage.getItem("theme") ?? "light";

addEventListener("DOMContentLoaded", document.documentElement.setAttribute("data-bs-theme", getTheme));
