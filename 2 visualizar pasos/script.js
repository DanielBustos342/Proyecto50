const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulo = document.querySelectorAll('.circulo');

let activar = 1;

siguiente.addEventListener('click',() =>{
    activar++;

    if (activar > circulo.length) {
        activar = circulo.length;
    }

    actualizacion();
})

anterior.addEventListener('click', () =>{
    activar--;

    if (activar < 1) {
        activar = 1;
    }

    actualizacion();
})
    
function actualizacion() {
    circulo.forEach((circulo, idx) => {
        if (idx < activar) {
            circulo.classList.add('active');
        }else{
            circulo.classList.remove('active');
        }       
    })

    const actives = document.querySelectorAll('.active');

    progreso.style.width = (actives.length - 1) / (circulo.length - 1) * 100 + '%';

    if (activar === 1) {
        anterior.disabled = true;
    }else if (activar === circulo.length) {
        siguiente.disabled = true
    }else{
        siguiente.disabled = false;
        anterior.disabled = false;
    }
}