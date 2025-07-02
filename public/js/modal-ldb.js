// modal-ldb.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalLDB");
  const closeBtn = document.getElementById("modalLDBClose");
  const openBtn = document.querySelector('[data-modal="ldb"]');

  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  }

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});
