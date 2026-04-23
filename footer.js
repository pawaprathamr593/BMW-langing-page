function loadFooter() {
  const footer = `
    <footer class="container-fluid glass-modal text-white pt-5 pb-3" id="about">
      <!-- BOTTOM LINE -->
    
      <div class="container">
        <div class="row">
          <!-- BRAND -->
          <div class="col-md-4 mb-4">
            <h3 class="fw-bold">B M W</h3>
            <p style="opacity: 0.7">
              Experience luxury, performance, and innovation like never before.
            </p>
          </div>

          <!-- LINKS -->
          <div class="col-md-2 mb-4">
            <h6 class="fw-bold">Quick Links</h6>
            <ul class="list-unstyled">
              <li>
                <a href="index.html" class="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="model.html" class="text-white text-decoration-none"
                  >Models</a
                >
              </li>
              <li>
                <a href="gallery.html" class="text-white text-decoration-none">Gallery</a>
              </li>
              <li>
                <a href="about.html" class="text-white text-decoration-none">About</a>
              </li>
            </ul>
          </div>

          <!-- SUPPORT -->
          <div class="col-md-3 mb-4">
            <h6 class="fw-bold">Support</h6>
            <ul class="list-unstyled">
              <li>
                <a
                  href="#"
                  class="text-white text-decoration-none"
                  >Contact</a
                >
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">FAQs</a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>

          <!-- SOCIAL -->
          <div class="col-md-3 mb-4">
            <h6 class="fw-bold">Follow Us</h6>
            <div class="d-flex gap-3 fs-4">
              <a href="https://www.facebook.com/BMW/" class="text-white"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/bmw/" class="text-white"><i class="bi bi-instagram"></i></a>
              <a href="https://x.com/BMW" class="text-white"><i class="bi bi-twitter-x"></i></a>
              <a href="https://www.youtube.com/bmw" class="text-white"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.getElementById("footer").innerHTML = footer;
}
