 document.addEventListener("DOMContentLoaded", () => {
      const typeTarget = document.getElementById("typewriter");
      const name = "Roswell Cruz";
      let i = 0;
      function typeWriter() {
        if (i < name.length) {
          typeTarget.textContent += name.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      typeWriter();
      document.getElementById("currentYear").textContent = new Date().getFullYear();
      AOS.init({ duration: 1400, once: true });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navLinks = document.querySelectorAll('.nav-link');
      const navbar = document.querySelector('.navbar');

      navbarToggler.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
      });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
          if (isExpanded) navbarToggler.click();
        });
      });

      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });