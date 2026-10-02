// Countdown
const eventDate = new Date("November 15, 2026 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();


// RSVP button
function showMessage() {
  const message = document.getElementById("rsvpMessage");

  message.textContent =
    "Thank you! Your attendance has been noted ❤️";

  message.style.opacity = "0";

  setTimeout(() => {
    message.style.transition = "0.5s";
    message.style.opacity = "1";
  }, 50);
}