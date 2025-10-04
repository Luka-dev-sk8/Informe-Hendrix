const btn = document.getElementById('btn')
const barra = document.querySelector('#barra')

btn.addEventListener('click', () => {
    barra.classList.toggle('.click')
});