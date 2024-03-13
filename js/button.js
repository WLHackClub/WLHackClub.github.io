document.getElementById("modeButton").addEventListener("click", () => {
    let attribute = "data-bs-theme";
    let currentState = document.documentElement.getAttribute(attribute);
    let newState = currentState === "light" ? "dark" : "light";
    localStorage.setItem("theme", newState);

    document.documentElement.setAttribute(attribute, newState);
});
