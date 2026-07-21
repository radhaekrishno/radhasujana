/* ==============================
   EDIT THESE THREE VALUES
   ============================== */
const CONFIG = {
  whatsappNumber: "918897985959", // Country code + number, no + or spaces
  venueName: "Parinaya Function Hall, NH-16, Rajahmundry Road, Jaggampeta",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Parinaya%20Function%20Hall%2C%20NH-16%2C%20Rajahmundry%20Road%2C%20Jaggampeta",
  timeZone: "Asia/Kolkata"
};

const weddingDate = new Date("2026-09-04T02:00:00+05:30");
const cover = document.getElementById("invitationCover");
const mainContent = document.getElementById("mainContent");
const openButton = document.getElementById("openInvitation");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

openButton.addEventListener("click", () => {
  cover.classList.add("is-opening");
  setTimeout(() => {
    cover.classList.add("opened");
    mainContent.classList.add("visible");
    mainContent.setAttribute("aria-hidden", "false");
    document.body.classList.remove("locked");
  }, 780);
});

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
menuButton.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

function updateCountdown() {
  const now = new Date();
  let delta = weddingDate.getTime() - now.getTime();

  if (delta <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(delta / 86400000);
  delta %= 86400000;
  const hours = Math.floor(delta / 3600000);
  delta %= 3600000;
  const minutes = Math.floor(delta / 60000);
  const seconds = Math.floor((delta % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const selectedEvents = new Set();
document.querySelectorAll(".event-card").forEach(card => {
  const button = card.querySelector(".event-select");
  button.addEventListener("click", () => {
    const eventName = card.dataset.event;
    const checkbox = [...document.querySelectorAll('input[name="events"]')]
      .find(input => input.value.startsWith(eventName));

    if (selectedEvents.has(eventName)) {
      selectedEvents.delete(eventName);
      card.classList.remove("selected");
      button.textContent = "Add to RSVP";
      if (checkbox) checkbox.checked = false;
    } else {
      selectedEvents.add(eventName);
      card.classList.add("selected");
      button.textContent = "Added ✓";
      if (checkbox) checkbox.checked = true;
    }
    showToast(`${eventName} ${selectedEvents.has(eventName) ? "added" : "removed"}`);
  });
});

document.querySelectorAll(".team-card").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".team-card").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.getElementById("selectedTeam").value = button.dataset.team;
    showToast(`${button.dataset.team} selected`);
  });
});

const rsvpForm = document.getElementById("rsvpForm");
rsvpForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(rsvpForm);
  const attendance = formData.get("attendance");
  const events = formData.getAll("events");
  const name = formData.get("guestName").trim();
  const count = formData.get("guestCount");
  const team = formData.get("selectedTeam") || "No side selected";
  const note = formData.get("guestNote").trim() || "—";

  const message = [
    "*Wedding RSVP — Sujana & Radha Krishna*",
    "",
    `Name: ${name}`,
    `Attendance: ${attendance}`,
    `Celebrations: ${events.length ? events.join(", ") : "Not specified"}`,
    `Guests: ${count}`,
    `Side: ${team}`,
    `Message: ${note}`
  ].join("\n");

  if (!CONFIG.whatsappNumber) {
    navigator.clipboard?.writeText(message);
    showToast("RSVP copied. Add your WhatsApp number in script.js.");
    document.getElementById("formNote").textContent = "RSVP copied to clipboard because the WhatsApp number is not set yet.";
    return;
  }

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

function toICSDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

document.getElementById("calendarButton").addEventListener("click", () => {
  const start = new Date("2026-09-01T09:00:00+05:30");
  const end = new Date("2026-09-04T06:00:00+05:30");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sujana Radha Krishna Wedding//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:sujana-radha-krishna-2026@wedding`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    "SUMMARY:Sujana & Radha Krishna Wedding Celebrations",
    `LOCATION:${CONFIG.venueName.replace(/,/g, "\\,")}`,
    "DESCRIPTION:Mehendi: 01 Sep 2026\\nPelli-Koduku & Pelli-Kuthuru: 02 Sep 2026\\nHaldi: 03 Sep 2026 at 09:00 AM\\nPelli: 04 Sep 2026 at 02:00 AM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Sujana-Radha-Krishna-Wedding.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
});

document.getElementById("directionsButton").addEventListener("click", () => {
  if (!CONFIG.mapUrl) {
    showToast("Add the Google Maps link in script.js.");
    return;
  }
  window.open(CONFIG.mapUrl, "_blank", "noopener,noreferrer");
});
