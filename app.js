/* =========================================
   Veylo Official Website
   app.js
   ========================================= */


/* =========================================
   Header scroll effect
   ========================================= */

const header = document.getElementById("siteHeader");

function updateHeader() {
  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* =========================================
   Mobile menu
   ========================================= */

const menuButton =
  document.getElementById("menuButton");

const nav =
  document.getElementById("nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      nav.classList.toggle("open");

    menuButton.classList.toggle(
      "active",
      isOpen
    );

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  /* Close menu after clicking a link */

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuButton.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================
   Reveal animation
   ========================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        observer.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================
   Current year
   ========================================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================
   Smooth anchor links
   ========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================
   Small parallax effect for hero glows
   ========================================= */

const glowOne =
  document.querySelector(".glow-one");

const glowTwo =
  document.querySelector(".glow-two");

window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;

    if (glowOne) {

      glowOne.style.transform =
        `translateY(${scroll * 0.08}px)`;

    }

    if (glowTwo) {

      glowTwo.style.transform =
        `translateY(${-scroll * 0.04}px)`;

    }

  },
  { passive: true }
);
