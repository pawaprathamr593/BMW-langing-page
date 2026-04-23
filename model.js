let allCars = [];

fetch('./bmwData.json')
  .then(res => res.json())
  .then(data => {

    allCars = data.models; // store globally

    renderCars(allCars); // initial render

    // filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        let filteredCars;

        if (filter === "all") {
          filteredCars = allCars;
        } 
        else if (filter === "Electric") {
          filteredCars = allCars.filter(car => car.fuel_type === "Electric");
        } 
        else if (filter === "Performance") {
          filteredCars = allCars.filter(car => car.series === "M");
        } 
        else {
          filteredCars = allCars.filter(car => car.category.includes(filter));
        }

        renderCars(filteredCars);
      });
    });

  });


// render function
function renderCars(cars) {

  const container = document.getElementById("carContainer");
  container.innerHTML = "";

  cars.forEach(car => {

    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
      <div class="card model-card text-white h-100 p-3">

         <img src="${car.image}" class="img-fluid rounded mb-3">

         <h5>${car.name}</h5>
         <p class="text-warning">${car.price}</p>

      </div>
    `;

    // modal click (same as before)
    card.addEventListener("click", () => {

      document.getElementById("modalCarName").textContent = car.name;
      document.getElementById("modalCarImage").src = car.image;
      document.getElementById("modalCarPrice").textContent = car.price;

      const specs = [
        car.engine && `Engine: ${car.engine}`,
        car.power && `Power: ${car.power}`,
        car.range && `Range: ${car.range}`,
        car.fuel_type && `Fuel Type: ${car.fuel_type}`,
        car.category && `Category: ${car.category}`
      ];

      const list = document.getElementById("modalCarSpecs");
      list.innerHTML = "";

      specs.forEach(spec => {
        if (spec) {
          const li = document.createElement("li");
          li.className = "list-group-item  text-white";
          li.textContent = spec;
          list.appendChild(li);
        }
      });

      const modal = new bootstrap.Modal(document.getElementById("carModal"));
      modal.show();
    });

    container.appendChild(card);
  });
}

