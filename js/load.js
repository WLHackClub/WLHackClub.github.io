const getTheme = localStorage.getItem('theme') ?? 'dark'

function setWindowTheme() {
     document.documentElement.setAttribute('data-bs-theme', getTheme)
}

addEventListener("DOMContentLoaded", setWindowTheme())
