const API_KEY = "KNbfI8Eawyo4AVmg4nChlnP7XQkHgD1AZ9Ls2gNs1TW7xLA9ZPbLumXw";

function loadImages(query) {

  fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=24`, {
    headers: {
      Authorization: API_KEY
    }
  })
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("galleryContainer");
    container.innerHTML = "";

    data.photos.forEach(photo => {

      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";

      col.innerHTML = `
        <div class="gallery-card">
          <img src="${photo.src.large}" class="img-fluid rounded">
        </div>
      `;

      container.appendChild(col);
    });

  });
}

// default
loadImages("bmw car");