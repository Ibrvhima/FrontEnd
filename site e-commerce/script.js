document.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments
  let menu = document.querySelector("#menu-bar");
  let navbar = document.querySelector(".navbar");
  let cartCountElement = document.getElementById("cart-count");
  let slides = document.querySelectorAll(".slide-container");
  let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
  
  // Mise à jour du panier à l'ouverture de la page
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }

  // Gestion du menu
  if (menu && navbar) {
    window.onscroll = () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    };
  }

  // Ajout au panier
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      if (cartCountElement) cartCountElement.textContent = cartCount;
      localStorage.setItem("cartCount", cartCount);
    });
  });

  // Slider (carousel)
  let index = 0;
  let slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  function prevSlide() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  }

  // Pause du slider au survol
  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slide.addEventListener("mouseleave", () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
    });
  });

  // Changement d'image principale lors du clic sur une miniature
  function setupImageChange(featuredClass, bigImageClass) {
    let featuredImages = document.querySelectorAll(`.${featuredClass}`);
    let bigImage = document.querySelector(`.${bigImageClass}`);

    if (featuredImages.length > 0 && bigImage) {
      featuredImages.forEach((image) => {
        image.addEventListener("click", () => {
          bigImage.src = image.getAttribute("src");
        });
      });
    }
  }

  // Appliquer la fonction aux différentes catégories d'images
  setupImageChange("featured-image-1", "big-image-1");
  setupImageChange("featured-image-2", "big-image-2");
  setupImageChange("featured-image-3", "big-image-3");
});
