document.getElementById("modeButton").addEventListener("click", (event) => {
    if (event.ctrlKey) {
        new bootstrap.Modal(document.getElementById("brightnessModal")).show();
        return;
    }
    let attribute = "data-bs-theme";
    let currentState = document.documentElement.getAttribute(attribute);
    let newState = currentState === "light" ? "dark" : "light";
    localStorage.setItem("theme", newState);

    document.documentElement.setAttribute(attribute, newState);
});

document.getElementById("brightnessRange").addEventListener("input", (event) => {
    document.documentElement.style.filter = `brightness(${event.target.value / 100})`;
});
