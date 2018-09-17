"use strict";
window.addEventListener("DOMContentLoaded", function() {
  let clicks = 0;
  let flower = document.querySelector("#stem-bud-petals");
  flower.addEventListener("click", function pauseAnimation() {
    clicks++;
    if (clicks % 2 == 0) {
      document.querySelector("circle").classList.remove("pause");
      document.querySelector("path").classList.remove("pause");
      document.querySelectorAll("ellipse").forEach(petal => {
        petal.classList.remove("pause");
      });
    } else {
      document.querySelector("circle").classList.add("pause");
      document.querySelector("path").classList.add("pause");
      document.querySelectorAll("ellipse").forEach(petal => {
        petal.classList.add("pause");
      });
    }
  });
});
