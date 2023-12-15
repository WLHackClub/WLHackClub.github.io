const getTheme = localStorage.getItem('theme') ?? 'light'

function setWindowTheme() {
     document.documentElement.setAttribute('data-bs-theme', getTheme)
}

addEventListener("DOMContentLoaded", setWindowTheme())
