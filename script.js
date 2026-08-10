// ================================
// BRATS by Shek — Website Settings
// ================================

// 1. Create a Google Calendar Appointment Schedule.
// 2. Copy its booking-page URL.
// 3. Paste it between the quotes below.
// Example:
// const BOOKING_URL = "https://calendar.app.google/npcGB5fqBVnkVE4F7";
const BOOKING_URL = "https://calendar.app.google/npcGB5fqBVnkVE4F7";

const bookingLink = document.getElementById("bookingLink");

if (BOOKING_URL.startsWith("http")) {
  bookingLink.href = BOOKING_URL;
  bookingLink.textContent = "Book Online";
} else {
  bookingLink.href = "tel:+14377347473";
  bookingLink.textContent = "Call to Book";
  bookingLink.addEventListener("click", function () {
    if (!BOOKING_URL.startsWith("http")) {
      // The button will simply call the studio until a booking URL is added.
    }
  });
}

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
