const fechaObjetivo = new Date("2025-11-20T00:00:00Z");

function actualizarFlip(id, valor) {
  const contenedor = document.getElementById(id);
  const nuevo = valor < 10 ? "0" + valor : valor.toString();
  const actual = contenedor.querySelector(".flip-number").textContent;

  // Actualizar sin animación para segundos
  if (id === "segundos") {
    contenedor.querySelector(".flip-number").textContent = nuevo;
    return;
  }

  if (actual !== nuevo) {
    contenedor.classList.add("flipping");
    setTimeout(() => {
      contenedor.querySelector(".flip-number").textContent = nuevo;
      contenedor.classList.remove("flipping");
    }, 300);
  }
}

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    ['dias', 'horas', 'minutos', 'segundos'].forEach(id => {
      const contenedor = document.getElementById(id);
      contenedor.querySelector(".flip-number").textContent = "00";
      contenedor.classList.remove("flipping");
    });
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  actualizarFlip("dias", dias);
  actualizarFlip("horas", horas);
  actualizarFlip("minutos", minutos);
  actualizarFlip("segundos", segundos);
}

actualizarContador();
setInterval(actualizarContador, 1000);
