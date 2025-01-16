const getSystemDefaults = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
};

const getTheme = localStorage.getItem("theme") ?? getSystemDefaults();

addEventListener("DOMContentLoaded", document.documentElement.setAttribute("data-bs-theme", getTheme));
