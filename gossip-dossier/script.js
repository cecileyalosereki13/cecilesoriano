/* ==================================================================
   GOSSIP DE CÉCILE — script.js
   Révélation discrète au scroll (respecte prefers-reduced-motion).
   L'envoi des formulaires est géré par Kit (ck.5.js) — rien à faire ici.
   Vanilla JS. Aucune dépendance.
   ================================================================== */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- 1. Révélation au scroll --------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll(".section, .hero__inner, .card");
    if (reduce || !("IntersectionObserver" in window)) return; // rien à faire

    els.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition =
        "opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1)";
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
  });
})();
