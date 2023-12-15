function setTheme(theme) {
    localStorage.setItem('theme', theme)
}

document.getElementById('modeButton').addEventListener('click', () => {
    let attribute = 'data-bs-theme'
    let currentState = document.documentElement.getAttribute(attribute)
    let newState = currentState === 'light' ? 'dark' : 'light'
    setTheme(newState)

    document.documentElement.setAttribute(attribute, newState)
})
