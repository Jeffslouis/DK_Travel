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

  // ---- Scroll reveal ----
  // Fades/slides common content blocks in as they enter the viewport.
  // Targets are picked generically so new pages get the effect for free
  // without needing a "reveal" class hand-added to every element.
  var revealTargets = document.querySelectorAll(
    ".card, .trip-card, .dest-card, .panel, blockquote.testimonial, " +
      ".gallery-item, .section-head, .faq-item, .contact-details, " +
      "#contact-form, .callout, .hero-note, .video-showcase"
  );

  if ("IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Lightbox (gallery) ----
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxClose = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var fullSrc = item.getAttribute("data-full") || item.querySelector("img").src;
        lightboxImg.src = fullSrc;
        lightboxImg.alt = item.querySelector("img").alt || "";
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      lightboxImg.src = "";
    }

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLightbox();
    });
  }
});
