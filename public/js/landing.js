const fechaObjetivo = new Date("2025-11-20T00:00:00").getTime();
const elementoContador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;
  const dias = Math.max(0, Math.floor(diferencia / (1000 * 60 * 60 * 24)));
  elementoContador.textContent = dias.toString().padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000 * 60 * 60);
