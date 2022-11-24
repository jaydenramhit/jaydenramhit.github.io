class customHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Jayden Ramhit</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects.html">Projects</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
        `
    }
}

customElements.define('custom-header', customHeader)

class customFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row mt-4" id="footer-content">
      <div>
        <ul class="fa-ul" style="margin-left: 1.65em;">
          <li class="mb-3">
            <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Montréal, Québec.</span>
          </li>
          <li class="mb-3">
            <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">jaydenramhit@gmail.com</span>
          </li>
          <li class="mb-3">
            <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">(514) 971-6586</span>
          </li>
        </ul>
      </div>

      <!--Grid column-->
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">About me</h5>
        <p>
          I'm a third year Computer Science Student at John Abbott College, I
          enjoy software development and hope to one day work in the automotive industry.
        </p>
      </div>
      <!--Grid column-->

      <div class="mt-4" style="margin-left: 1.65em;">
        <!-- Facebook -->
        <a type="button" class="btn btn-floating btn-dark btn-lg"><i class="fab fa-facebook-f"></i></a>
        <!-- Dribbble -->
        <a type="button" class="btn btn-floating btn-dark btn-lg"><i class="fab fa-dribbble"></i></a>
        <!-- Twitter -->
        <a type="button" class="btn btn-floating btn-dark btn-lg"><i class="fab fa-twitter"></i></a>
        <!-- Google + -->
        <a type="button" class="btn btn-floating btn-dark btn-lg"><i class="fab fa-google-plus-g"></i></a>
        <!-- Linkedin -->
      </div>

    </div>

  </div>
  <!--Grid row-->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white" href="https://github.com/jaydenramhit" target="_blank">Jayden Ramhit</a>
  </div>
  <!-- Copyright -->
        `
    }
}

customElements.define('custom-footer', customFooter)
