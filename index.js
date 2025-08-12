const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");

function updateTheme() {
  const hour = new Date().getHours();
  let gradient;

  if (hour >= 6 && hour < 12) {
    gradient = `
      linear-gradient(
        135deg,
        rgba(255, 223, 186, 0.9) 0%,
        rgba(255, 244, 214, 0.85) 35%,
        rgba(186, 235, 255, 0.9) 70%
      ),
      radial-gradient(
        circle at top left,
        rgba(255,255,255,0.4) 0%,
        transparent 80%
      )
    `;
  } else if (hour >= 12 && hour < 18) {
    gradient = `
      linear-gradient(
        135deg,
        rgba(186, 235, 255, 0.9) 0%,
        rgba(186, 255, 201, 0.88) 40%,
        rgba(255, 255, 204, 0.85) 80%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(255,255,255,0.3) 0%,
        transparent 85%
      )
    `;
  } else {
    gradient = `
      linear-gradient(
        135deg,
        rgba(30, 30, 60, 0.95) 0%,
        rgba(45, 45, 80, 0.9) 40%,
        rgba(80, 60, 120, 0.88) 80%
      ),
      radial-gradient(
        circle at center,
        rgba(255,255,255,0.15) 0%,
        transparent 70%
      )
    `;
  }

  document.body.style.backgroundImage = gradient;
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockEl.classList.add("fade-change");
  setTimeout(() => {
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    clockEl.classList.remove("fade-change");
  }, 150);

  const dateStr = now.toLocaleDateString("us-en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateEl.textContent = dateStr;

  updateTheme();
}

setInterval(updateClock, 1000);
updateClock();
