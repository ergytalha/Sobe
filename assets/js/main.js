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
    const slider = document.querySelector(".product-slider");
    const slides = document.querySelectorAll(".product-slide");
    const btnUp = document.getElementById("scroll-up");
    const btnDown = document.getElementById("scroll-down");

    let index = 0;
    const totalSlides = slides.length;

    // Slider Güncelleme Fonksiyonu (Tek Tek Kaydırma)
    function updateSlide() {
        const slideHeight = slides[0].offsetHeight; // Tek bir slaytın yüksekliği
        slider.style.transform = `translateY(-${index * slideHeight}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";
    }

    // Butonları Kontrol Et
    if (btnUp && btnDown) {
        // Aşağı Kaydır (Tek Tek)
        btnDown.addEventListener("click", function () {
            if (index < totalSlides - 1) {
                index++; // Sadece 1 satır ilerle
                updateSlide();
            }
        });

        // Yukarı Kaydır (Tek Tek)
        btnUp.addEventListener("click", function () {
            if (index > 0) {
                index--; // Sadece 1 satır geri git
                updateSlide();
            }
        });
    } else {
        console.error("Kaydırma butonları bulunamadı!");
    }

    // Otomatik Geçiş (Her 4 saniyede bir, tek tek kaydır)
    setInterval(() => {
        if (index < totalSlides - 1) {
            index++;
        } else {
            index = 0; // Sona ulaşınca başa dönmesin, dur
        }
        updateSlide();
    }, 4000);
});





