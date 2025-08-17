document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');

  const revealOnScroll = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });
});


const texts = ["Hello, I'm Shonnie ", "A College Student ", " Designer ", "Coder "];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    const currentText = texts[index];
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 3000);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); 
  }

  typeEffect();




document.getElementById("currentYear").textContent = new Date().getFullYear();