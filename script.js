window.addEventListener("load", () => {
  const smokeImg = document.getElementById("smoke"); // hero dumanı
  const aboutSmokeImg = document.getElementById("aboutSmoke"); // about dumanı (alt)
  const text = document.getElementById("heroText");
  const aboutSection = document.querySelector(".about-section");

  let lastScrollY = window.scrollY;
  let scrolledToAbout = false;

  text.style.opacity = "0";
  setTimeout(() => {
    text.style.opacity = "1";
  }, 500);

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const isScrollingDown = scrollY > lastScrollY;

    // 🔄 Duman yukarı süzülür gibi görünür
    smokeImg.style.transform = `translateY(${scrollY * -0.3}px)`;

    // 🔄 About kısmındaki duman da aynı şekilde yukarı çıksın
    if (aboutSmokeImg) {
      aboutSmokeImg.style.transform = `translateY(${scrollY * -0.3}px)`;
    }

    if (isScrollingDown && !scrolledToAbout) {
      scrolledToAbout = true;
      text.classList.add("fade-out");

      setTimeout(() => {
        aboutSection.classList.add("show");
      }, 1000);
    }

    if (!isScrollingDown && scrollY <= 10 && scrolledToAbout) {
      text.classList.remove("fade-out");
      aboutSection.classList.remove("show");
      scrolledToAbout = false;
    }

    lastScrollY = scrollY;
  });
});


const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    // 🔼 Yukarı scroll – header geri gelsin
    header.style.top = "0";
  } else {
    // 🔽 Aşağı scroll – header gizlensin (opsiyonel)
    header.style.top = "-100px";
  }

  lastScrollY = currentScrollY;
});
document.addEventListener("DOMContentLoaded", () => {
  const strategySection = document.querySelector(".strategy-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        strategySection.classList.add("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  if (strategySection) {
    observer.observe(strategySection);
  }
});
