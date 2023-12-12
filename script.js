document.getElementById('modeButton').addEventListener('click', () => {
    let currentState = document.documentElement.getAttribute('data-bs-theme')

    document.documentElement.setAttribute('data-bs-theme', currentState === 'light' ? 'dark' : 'light')
})
