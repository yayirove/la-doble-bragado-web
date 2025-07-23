// modal-ldb.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalLDB");
  const modalGracias = document.getElementById("modalGracias");
  const closeBtn = document.getElementById("modalLDBClose");
  const closeGraciasBtns = document.querySelectorAll("#modalGraciasClose, #modalGraciasBtn");
  const openButtons = document.querySelectorAll('[data-modal="ldb"]');
  const form = modal.querySelector('form');

  // Abrir modal principal
  openButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });
  });

  // Cerrar modal principal
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Manejar envío del formulario
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Enviar formulario a Netlify
      const formData = new FormData(form);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => {
        // Cerrar modal principal y mostrar agradecimiento
        modal.style.display = "none";
        modalGracias.style.display = "flex";
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      });
    });
  }

  // Cerrar modal de agradecimiento
  closeGraciasBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      modalGracias.style.display = "none";
    });
  });

  // Cerrar modales clickeando fuera
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
    if (e.target === modalGracias) {
      modalGracias.style.display = "none";
    }
  });
});