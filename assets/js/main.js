/* Isaac Jensen — portfolio interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* --- current year in footer --- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* --- live clock in the top bar (local time) --- */
  var clock = document.getElementById("clock");
  if (clock) {
    var tick = function () {
      var d = new Date();
      var p = function (n) { return String(n).padStart(2, "0"); };
      clock.textContent = p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
    };
    tick();
    setInterval(tick, 1000);
  }

  /* --- reveal-on-scroll --- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { revObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
