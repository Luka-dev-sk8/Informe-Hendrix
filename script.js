const btn = document.querySelector('#btn');
const clicks = document.querySelector('.click');
const barra = document.getElementById('barra');

btn.addEventListener('click', () => { 
    barra.classList.toggle('click');
});

document.addEventListener('click', function(e) {
  if (barra.classList.contains('click') && !barra.contains(e.target) && !btn.contains(e.target)){
        barra.classList.remove('click');
  }
});