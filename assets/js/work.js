
let lastScrollTop = 0;
const navbar = document.querySelector(".custom-navbar");
const toggler = document.querySelector(".navbar-toggler");

// get navbar height dynamically
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function() {
  // only run on mobile (when toggler is visible)
  if (getComputedStyle(toggler).display !== "none") {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // scrolling down -> hide navbar completely
      navbar.style.top = `-${navbarHeight}px`;
    } else {
      // scrolling up -> show navbar
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  } else {
    // desktop: always visible
    navbar.style.top = "0";
  }
});


    // let loader = document.querySelector(".loader2");
    // window.addEventListener("load", vanish);

    // function vanish() {
    //   loader.classList.add("disappear");
    // }
    

document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.querySelector(".loader2");
  preloader.classList.add("disappear");
});

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
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
        