// modal-ldb.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalLDB");
  const closeBtn = document.getElementById("modalLDBClose");
  const openButtons = document.querySelectorAll('[data-modal="ldb"]');

  // Abrir modal
  openButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });
  });

  // Cerrar modal con X
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Cerrar modal clickeando fuera
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});