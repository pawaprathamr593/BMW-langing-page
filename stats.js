document.addEventListener("DOMContentLoaded", function () {

  function animateValue(id, start, end, duration, unit) {

    const obj = document.getElementById(id);
    const range = end - start;
    let startTime = null;

    function step(timestamp) {

      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      let value = start + range * (progress / duration);

      if (value > end) value = end;

      if (unit === "s") {
        obj.textContent = value.toFixed(1) + " " + unit;
      } else {
        obj.textContent = Math.floor(value) + " " + unit;
      }

      if (progress < duration) {
        requestAnimationFrame(step);
      }

    }

    requestAnimationFrame(step);
  }

  // Run animations
  animateValue("torque", 0, 650, 2000, "Nm");
  animateValue("speed", 0, 3.9, 2000, "s");
  animateValue("maxspeed", 0, 290, 2000, "km/h");

});