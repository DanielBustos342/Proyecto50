const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const container = document.querySelector('.container');

abrir.addEventListener('click',() => container.classList.add('show-nav'));
cerrar.addEventListener('click',() => container.classList.remove('show-nav'));