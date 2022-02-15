function mudaModo() {
    mudaClasses()
    mudaTextos()
}

function mudaClasses(){
    h1.classList.toggle(darkModeClasse)
    button.classList.toggle(darkModeClasse)
    footer.classList.toggle(darkModeClasse)
    corpo.classList.toggle(darkModeClasse)
}

function mudaTextos(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(corpo.classList.contains(darkModeClasse) ){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + " ON"
        return
    }
    button.innerHTML = darkMode
    h1.innerHTML = lightMode + " ON"
}

const darkModeClasse = 'dark-mode'
const h1 = document.querySelectorAll('#page-title')[0]
const button = document.querySelectorAll('#mode-selector')[0]
const footer = document.querySelector('footer')
const corpo = document.querySelector('body')

button.addEventListener("click", mudaModo)