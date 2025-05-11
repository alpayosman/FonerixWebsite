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
  const sectors = document.getElementById("sectors");

  // Arka planı belirle
  if (id === "info1") {
    sectors.style.backgroundImage = "url('images/buckhead-bg.png')";
  } else if (id === "info2") {
    sectors.style.backgroundImage = "url('images/bereket-bg.png')";
  }

  sectors.style.backgroundSize = "cover";
  sectors.style.backgroundPosition = "center";

  // Tüm wrapper'ları gizle
  document.querySelectorAll('.sector-wrapper').forEach(wrapper => {
    wrapper.style.display = 'none';
  });

  // Aktif wrapper'ı göster
  const activeWrapper = document.getElementById(id).closest('.sector-wrapper');
  activeWrapper.style.display = 'flex';

  // Tüm panelleri gizle (hem panel1 hem panel2)
  document.querySelectorAll('.sector-info-panel, .sector-info-panel2').forEach(panel => {
    panel.classList.remove('show', 'dark');
    panel.style.marginLeft = '';
    panel.style.marginRight = '';
  });

  // Aktif paneli göster
  const activePanel = document.getElementById(id);
  activePanel.classList.add('show');

  // Brand 2 için ekstra sınıf ve konum
  if (id === "info2") {
    activePanel.classList.add('dark');
    activePanel.style.marginLeft = 20;
    activePanel.style.marginRight = 'auto';
  }

  // Kutuları sıfırla
  document.querySelectorAll('.sector-box').forEach(box => {
    box.classList.remove('active', 'right-shift');
  });

  // Aktif kutuya class ekle
  const activeBox = activeWrapper.querySelector('.sector-box');
  if (id === "info1") {
    activeBox.classList.add('active');
  } else if (id === "info2") {
    activeBox.classList.add('right-shift');
  }
}

function hideInfo() {
  document.getElementById("sectors").style.backgroundImage = "";

  // Tüm panelleri kapat (her iki türden)
  document.querySelectorAll('.sector-info-panel, .sector-info-panel2').forEach(panel => {
    panel.classList.remove('show', 'dark');
    panel.style.marginLeft = '';
    panel.style.marginRight = '';
  });

  // Tüm wrapper'ları geri getir
  document.querySelectorAll('.sector-wrapper').forEach(wrapper => {
    wrapper.style.display = 'flex';
  });

  // Kutuları sıfırla
  document.querySelectorAll('.sector-box').forEach(box => {
    box.classList.remove('active', 'right-shift');
  });
}

function toggleMenu() {
  document.querySelector('nav').classList.toggle('active');
}


