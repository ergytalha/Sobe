document.addEventListener("DOMContentLoaded", function () {
  // 1️⃣ Ana Slider (Yatay, fade efektli)
  const mainSlider = new Swiper(".slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".bagis-slider");
    let slides = document.querySelectorAll(".bagis-slide");
    const btnUp = document.getElementById("scroll-up");
    const btnDown = document.getElementById("scroll-down");
  
    // Aynı anda kaç slayt görünsün? (ör. 4)
    // Orijinal slayt sayınız en az 4 olmalı!
    const visibleSlides = 4;
    let index = 0;
  
    // Orijinal slayt sayısı (klonlamadan önceki)
    const originalSlideCount = slides.length;
  
    // 1) İlk "visibleSlides" kadar slaytı kopyala, slider'ın sonuna ekle
    for (let i = 0; i < visibleSlides; i++) {
      // Her ihtimale karşı, i >= originalSlideCount olmamasına dikkat et.
      if (i < originalSlideCount) {
        const clone = slides[i].cloneNode(true);
        slider.appendChild(clone);
      }
    }
  
    // Klonları ekledikten sonra slides listesini güncelle
    slides = document.querySelectorAll(".bagis-slide");
  
    // 2) Tek bir slaydın yüksekliğini hesaplayan fonksiyon
    //    Margin-bottom varsa, bunu da eklemek isteyebilirsiniz.
    function getSlideHeight(slide) {
      const style = window.getComputedStyle(slide);
      const marginTop = parseFloat(style.marginTop);
      const marginBottom = parseFloat(style.marginBottom);
      return slide.offsetHeight + marginTop + marginBottom;
    }
  
    // Slider'ı güncelleme fonksiyonu
    function updateSlide(withTransition = true) {
      // ilk slaydın yüksekliğini baz alıyoruz
      const singleSlideHeight = getSlideHeight(slides[0]);
      // transition ayarla
      slider.style.transition = withTransition ? "transform 0.5s ease-in-out" : "none";
      // translateY hesapla
      slider.style.transform = `translateY(-${index * singleSlideHeight}px)`;
    }
  
    // Transition bittikten sonra, eğer index orijinal slayt sayısını aştıysa sıfırla
    slider.addEventListener("transitionend", function () {
      if (index >= originalSlideCount) {
        // En başa dön
        index = 0;
        updateSlide(false);
      }
    });
  
    // Butonlar
    btnDown.addEventListener("click", function () {
      index++;
      updateSlide();
    });
  
    btnUp.addEventListener("click", function () {
      if (index > 0) {
        index--;
        updateSlide();
      } else {
        // En baştaysak, ters yönde son orijinal slayda git
        index = originalSlideCount - 1;
        updateSlide(false);
        // Biraz gecikmeyle animasyon
        setTimeout(() => updateSlide(), 20);
      }
    });
  
    // Otomatik geçiş (ör. 4 saniyede bir)
    setInterval(() => {
      index++;
      updateSlide();
    }, 4000);
  
    // 3) container yüksekliğini, "visibleSlides * tek slayt yüksekliği" olarak ayarla
    function setContainerHeight() {
      if (slides.length > 0) {
        const singleSlideHeight = getSlideHeight(slides[0]);
        slider.style.height = `${singleSlideHeight * visibleSlides}px`;
      }
    }
    setContainerHeight();
  
    // 4) Ekran boyutu değişince yeniden hesapla (responsive için)
    window.addEventListener("resize", () => {
      setContainerHeight();
      updateSlide(false);
    });
  });
  
  
  

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".bagis-slider");
    let slides = document.querySelectorAll(".bagis-slide");
    const btnUp = document.getElementById("scroll-up");
    const btnDown = document.getElementById("scroll-down");
  
    let index = 0;
    const visibleSlides = 4; // Aynı anda gösterilecek slayt sayısı
    const originalSlideCount = slides.length;
  
    // İlk visibleSlides kadar olan slaytları kopyalayıp slider'ın sonuna ekle
    for (let i = 0; i < visibleSlides; i++) {
      const clone = slides[i].cloneNode(true);
      slider.appendChild(clone);
    }
  
    // Klon eklendikten sonra slides listesini güncelle
    slides = document.querySelectorAll(".bagis-slide");
  
    // Slider'ı güncelleme fonksiyonu
    function updateSlide(withTransition = true) {
      const slideHeight = slides[0].offsetHeight;
      slider.style.transition = withTransition ? "transform 0.5s ease-in-out" : "none";
      slider.style.transform = `translateY(-${index * slideHeight}px)`;
    }
  
    // Geçiş tamamlandığında, eğer index orijinal slaytların sonunu aşmışsa, index'i sıfırlayarak başa dön
    slider.addEventListener("transitionend", function () {
      if (index >= originalSlideCount) {
        index = 0;
        updateSlide(false);
      }
    });
  
    // Kaydırma butonları için event listener'lar
    if (btnUp && btnDown) {
      btnDown.addEventListener("click", function () {
        index++;
        updateSlide();
      });
  
      btnUp.addEventListener("click", function () {
        if (index > 0) {
          index--;
          updateSlide();
        } else {
          // Eğer ilk slayttayız, ters yönde geçiş için son orijinal slayta geçiş yap
          index = originalSlideCount - 1;
          updateSlide(false);
          setTimeout(() => {
            updateSlide();
          }, 20);
        }
      });
    } else {
      console.error("Kaydırma butonları bulunamadı!");
    }
  
    // Otomatik geçiş (Her 4 saniyede bir)
    setInterval(() => {
      index++;
      updateSlide();
    }, 4000);
  
    // Slider konteynerinin yüksekliğini, görünür slayt sayısına göre ayarla
    const slideHeight = slides[0].offsetHeight;
    slider.style.height = `${slideHeight * visibleSlides}px`;
  });
  
  
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#main-menu");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});

var swiper = new Swiper(".news-swiper .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".news-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news-swiper .swiper-button-next",
    prevEl: ".news-swiper .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  autoplay: {
    delay: 3000, // 3 saniyede bir kaydır
    disableOnInteraction: false,
  },
  grabCursor: true,
});

var blogSwiper = new Swiper(".blogSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next butonu
    prevEl: ".swiper-button-prev", // Prev butonu
  },
  loop: true,
  slidesPerView: 5, // Aynı anda 5 slayt göster
  spaceBetween: 5, // Slaytlar arası boşluk
  centeredSlides: true, // Aktif slaytı ortala
  initialSlide: 2, // Başlangıçta ortadaki slaytı aktif yap (3. slayt)
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: -50, // Slaytları yanlara doğru uzatır
    depth: 100, // Slaytların derinlik etkisini artırır
    modifier: 1,
    slideShadows: false, // Gölge efektini kapatır
  },
  autoplay: {
    delay: 10000, // 10 saniyede bir kaydır
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var customThumbSwiper = new Swiper(".custom-thumb-slider", {
  spaceBetween: 10,
  slidesPerView: 3, // Gözüken thumbnail sayısı
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var customMainSwiper = new Swiper(".custom-main-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
  thumbs: {
    swiper: customThumbSwiper,
  },
});
customMainSwiper.on("slideChange", function () {
  const activeIndex = customMainSwiper.activeIndex;
  document
    .querySelectorAll(".custom-thumb-slider .swiper-slide")
    .forEach((slide) => {
      slide.classList.remove("active-thumb");
    });
  const thumbs = document.querySelectorAll(
    ".custom-thumb-slider .swiper-slide"
  );
  if (thumbs[activeIndex]) {
    thumbs[activeIndex].classList.add("active-thumb");
  }
});

const colors = ["#dff3f3", "#fdedd6", "#edf5da", "#d2eefb"];
const boxes = document.querySelectorAll(".new-box-content");

boxes.forEach((box, index) => {
  const colorIndex = index % colors.length;
  box.style.background = colors[colorIndex];
});

const iconbg = [
  "#a4dedc",
  "#95b88c",
  "#f1cc5c",
  "#f4b1a3",
  "#fa7172",
  "#f8c48d",
  "#ebc2dd",
  "#a4dedc",
];
const icon = document.querySelectorAll(".icon-bg2");

icon.forEach((box, index) => {
  const colorIndex = index % iconbg.length;
  box.style.background = iconbg[colorIndex];
});

const buttons = document.querySelectorAll(".what-we-do-btn a");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    document
      .querySelectorAll(".what-we-do-container .content-section")
      .forEach((section) => {
        section.style.display = "none";
      });
    document.getElementById(targetId).style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");
    dropdown.addEventListener("mouseenter", function () {
      menu.classList.add("active");
    });
    dropdown.addEventListener("mouseleave", function () {
      menu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper1 = new Swiper("#content1", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
  });
});
