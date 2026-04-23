fetch("bmwData.json")
  .then(res => res.json())
  .then(data => {

    const cars = data.models;
    const container = document.getElementById("carouselInner");

    container.innerHTML = "";

    let itemsPerSlide = 3; // desktop default

    // Responsive logic
    if (window.innerWidth < 576) itemsPerSlide = 1;
    else if (window.innerWidth < 992) itemsPerSlide = 2;

    // Create slides
    for (let i = 0; i < cars.length; i += itemsPerSlide) {

      const slideCars = cars.slice(i, i + itemsPerSlide);

      const item = document.createElement("div");
      item.className = `carousel-item ${i === 0 ? "active" : ""}`;

      item.innerHTML = `
        <div class="row justify-content-center g-3 px-3">

          ${slideCars.map(car => `
            <div class="col-12 col-md-6 col-lg-4">

              <div class="card model-card text-white border h-100">

                <img src="${car.image}" class="card-img-top">

                <div class="card-body text-center">

                  <h5>${car.name}</h5>
                  <p>${car.category}</p>

                  ${car.engine ? `<p>Engine: ${car.engine}</p>` : ""}
                  ${car.power ? `<p>Power: ${car.power}</p>` : ""}
                  ${car.range ? `<p>Range: ${car.range}</p>` : ""}

                  <p>Fuel: ${car.fuel_type}</p>

                  <a href="model.html?car=${car.id}" class="btn btn-warning mt-2">
                    View Details
                  </a>

                </div>

              </div>

            </div>
          `).join("")}

        </div>
      `;

      container.appendChild(item);
    }

  });


  // INIT EMAILJS
(function () {
  emailjs.init("_GCQyXVJgIm6rOyxa");
})();

// HANDLE ENQUIRY FORM
function setupEnquiryForm() {
  const form = document.getElementById("enquiryForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_2jxid6o", "template_t18mxub", form)
      .then(() => {
        return emailjs.sendForm("service_2jxid6o", "template_6t6o5hc", form);
      })
      .then(() => {
        alert("Enquiry Sent Successfully ✅");
        form.reset();
      })
      .catch((error) => {
        alert("Failed ❌ " + error.text);
      });
  });
}

// active button
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");

  console.log("Buttons found:", buttons.length); // 🔍 DEBUG

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log("Clicked:", this.innerText); // 🔍 DEBUG

      buttons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
