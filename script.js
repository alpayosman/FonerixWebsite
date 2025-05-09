window.addEventListener("load", () => {
  const smokeImg = document.getElementById("smoke"); // hero dumanı
  const text = document.getElementById("heroText");
  const aboutSection = document.querySelector(".about-section");

  let lastScrollY = window.scrollY;
  let scrolledToAbout = false;

  // === YAZI FADE-IN ===
  text.style.opacity = "0";
  setTimeout(() => {
    text.style.opacity = "1";
  }, 500);

  // === SMOKE FADE-IN ===
  smokeImg.style.opacity = "0";
  smokeImg.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    smokeImg.style.opacity = "1";
  }, 100);

  // === SCROLL EVENT ===
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const isScrollingDown = scrollY > lastScrollY;

    // Duman yukarı süzülür gibi hareket etsin
    smokeImg.style.transform = `translateY(${scrollY * -0.3}px)`;

    // Yazı fade-out ve about açılması
    if (isScrollingDown && !scrolledToAbout) {
      scrolledToAbout = true;
      text.classList.add("fade-out");

      setTimeout(() => {
        aboutSection.classList.add("show");
      }, 1000);
    }

    // Geri scroll yapılırsa her şey eskiye dönsün
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

function showInfo(id) {
  // Tüm wrapper'ları gizle
  document.querySelectorAll('.sector-wrapper').forEach(wrapper => {
    wrapper.style.display = 'none';
  });

  // Tıklanan bilgi paneli içeren wrapper'ı göster
  const activeWrapper = document.getElementById(id).closest('.sector-wrapper');
  activeWrapper.style.display = 'flex';

  // Sadece ilgili paneli göster
  document.querySelectorAll('.sector-info-panel').forEach(panel => {
    panel.classList.remove('show');
  });
  document.getElementById(id).classList.add('show');
}

function hideInfo() {
  // Tüm info panelleri gizle
  document.querySelectorAll('.sector-info-panel').forEach(panel => {
    panel.classList.remove('show');
  });

  // Tüm wrapper'ları geri göster
  document.querySelectorAll('.sector-wrapper').forEach(wrapper => {
    wrapper.style.display = 'flex';
  });
}


