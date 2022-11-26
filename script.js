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
            More
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="skills.html">Skills</a>
            <a class="dropdown-item" href="https://github.com/jaydenramhit" target="_blank">GitHub Profile</a>
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
    <div class="row" id="footer-content">
      <div class="footer-info">
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

      <div class="mt-4 footer-links" style="margin-left: 1.65em;">
        <!-- Github -->
        <a type="button" class="btn btn-floating btn-dark btn-lg" href="https://github.com/jaydenramhit" target="_blank"><i class="fab fa-github"></i></a>
        <!-- Linkedin -->
        <a type="button" class="btn btn-floating btn-dark btn-lg" href="https://www.linkedin.com/in/jayden-ramhit-430778203/?originalSubdomain=ca" target="_blank"><i class="fab fa-linkedin"></i></a>
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

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
