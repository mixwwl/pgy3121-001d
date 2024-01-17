document.addEventListener("DOMContentLoaded", function() {
  function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    const tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').innerText = tiempo;
  }

  setInterval(actualizarReloj, 1000); // Actualiza cada segundo
  actualizarReloj(); // Para mostrar el tiempo actual inmediatamente
});