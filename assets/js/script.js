const h1 = document.querySelectorAll('#page-title')[0]
const button = document.querySelectorAll('#mode-selector')[0]
const footer = document.querySelector('footer')
const corpo = document.querySelector('body')

button.addEventListener("click", function() {
    // alert('oi')
    h1.classList.toggle('dark-mode')
    button.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    corpo.classList.toggle('dark-mode')
})

