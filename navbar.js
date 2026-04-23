// navebar
function loadNavbar() {
  const navbar = `
    <nav class="navbar navbar-expand-lg px-4 glass-modal" style="z-index: 10">
      <div class="container-fluid">
        <!-- LOGO -->

        <a class="navbar-brand fw-bolder fs-1 text-white" href="#" id="logo"
          ><img
            src="https://static.vecteezy.com/system/resources/previews/019/764/228/large_2x/bmw-logo-free-download-free-png.png"
            alt=""
          />
          B M W</a
        >

        <!-- HAMBURGER BUTTON -->
        <button
          class="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i class="bi bi-list" style="font-size: 28px"></i>
        </button>

        <!-- NAV ITEMS -->
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul
            class="navbar-nav px-4 py-2 rounded">
            <li class="nav-item px-2">
              <a class="nav-link nav-item-link text-white" href="index.html">Home</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link nav-item-link text-white" href="model.html">Models</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link nav-item-link text-white" href="gallery.html">Gallery</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link nav-item-link text-white" href="about.html">About</a>
            </li>
          </ul>
        </div>

        <div class="d-flex ms-lg-3 mt-3 mt-lg-0">
          <button class="btn btn-warning fw-bold px-4 collapse navbar-collapse"  id="navbarNav" data-bs-toggle="modal"
        data-bs-target="#enquiryModal"> Enquire Now </button>
        </div>
      </div>
    </nav>

    <!-- ENQUIRY MODAL -->
    <div class="modal fade" id="enquiryModal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-dark text-white">

          <div class="modal-header">
            <h5>Car Enquiry</h5>
            <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">

            <!-- FORM -->
            <form id="enquiryForm">
              <div class="row">

                <div class="col-md-6 mb-3">
                  <label>Full Name</label>
                  <input type="text" name="name" class="form-control" required>
                </div>

                <div class="col-md-6 mb-3">
                  <label>Phone</label>
                  <input type="tel" name="phone" class="form-control" required>
                </div>

                <div class="col-md-6 mb-3">
                  <label>Email</label>
                  <input type="email" name="email" class="form-control" required>
                </div>

                <div class="col-md-6 mb-3">
                  <label>Select Model</label>
                  <select name="model" class="form-select">
                    <option>BMW M4</option>
                    <option>BMW M5</option>
                    <option>BMW X5</option>
                  </select>
                </div>

                <div class="col-12 mb-3">
                  <label>City</label>
                  <input type="text" name="city" class="form-control">
                </div>

                <div class="col-12 mb-3">
                  <label>Message</label>
                  <textarea name="message" class="form-control"></textarea>
                </div>

              </div>

              <button type="submit" class="btn btn-warning w-100">
                Submit Enquiry
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("navbar").innerHTML = navbar;
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-item-link");

  const currentUrl = window.location.href;

  links.forEach((link) => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});



