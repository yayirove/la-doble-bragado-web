function updateCountdown() {
  const target = new Date("2025-11-20T00:00:00");
  const now = new Date();
  const diff = target - now;

  const totalSeconds = Math.floor(diff / 1000);

  if (totalSeconds <= 86400) {
    const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    document.getElementById("contador").textContent = `${hours}:${minutes}:${seconds}`;
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("contador").textContent = days;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000); // actualiza cada segundo para transición suave
