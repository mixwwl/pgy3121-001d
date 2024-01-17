// Función para cambiar el modo (oscuro/claro)
function cambiarModo() {
    // Obtener el elemento body
    const body = document.body;

    // Obtener el elemento nave
    const nave = document.getElementById('nave');

    // Obtener el elemento Carru
    const carru = document.getElementById('Carru');

    // Obtener todas las tarjetas con la clase card
    const tarjetas = document.querySelectorAll('.card');

    // Obtener el pie de página
    const pieDePagina = document.querySelector('footer');

    // Obtener el elemento con el ID NAN
    const nanElemento = document.getElementById('NAN');

    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');

    // Alternar la clase 'modo-oscuro' en la nave
    nave.classList.toggle('modo-oscuro');

    // Alternar la clase 'modo-oscuro' en el Carru
    carru.classList.toggle('modo-oscuro');

    // Iterar sobre las tarjetas y alternar la clase 'modo-oscuro'
    tarjetas.forEach((tarjeta) => {
        tarjeta.classList.toggle('modo-oscuro');
    });

    // Alternar la clase 'modo-oscuro' en el pie de página
    pieDePagina.classList.toggle('modo-oscuro');

    // Alternar la clase 'modo-oscuro' en el elemento con el ID NAN
    nanElemento.classList.toggle('modo-oscuro');

    // Guardar la preferencia del usuario en localStorage
    const modoActual = body.classList.contains('dark-mode') ? 'oscuro' : 'claro';
    localStorage.setItem('modoPreferido', modoActual);
}

// Verificar si el usuario ya tiene una preferencia de modo guardada
const modoPreferido = localStorage.getItem('modoPreferido');
if (modoPreferido === 'oscuro') {
    // Si el modo preferido es oscuro, aplicar la clase al body, nave, Carru, tarjetas, pie de página y elemento con el ID NAN
    document.body.classList.add('dark-mode');
    document.getElementById('nave').classList.add('modo-oscuro');
    document.getElementById('Carru').classList.add('modo-oscuro');
    document.querySelectorAll('.card').forEach((tarjeta) => {
        tarjeta.classList.add('modo-oscuro');
    });
    document.querySelector('footer').classList.add('modo-oscuro');
    document.getElementById('NAN').classList.add('modo-oscuro');
}







