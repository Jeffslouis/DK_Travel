// Destination Konpa — shared site behavior (mobile nav + contact form).
// Plain vanilla JS, no build step, so it ports easily into a theme's
// main.js / enqueued script.

document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var contactForm = document.getElementById("contact-form");
  var contactStatus = document.getElementById("contact-status");

  if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // NOTE: this is a static site with no backend yet. When this design
      // is ported into the WordPress theme, wire this up to wp_mail() (or
      // an SMTP plugin) instead of intercepting the submit here.
      contactStatus.hidden = false;
      contactStatus.className = "form-status is-success";
      contactStatus.textContent =
        "Thanks — this form isn't connected yet on the static preview. " +
        "It'll send to info@destinationkonpa.com once this becomes the live theme.";

      contactForm.reset();
    });
  }
});
