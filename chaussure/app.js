const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
    gallery: [
      { img: "img/airNike.jpg", title: "Be Yourself!" },
      { img: "img/airNike1.jpg", title: "This is the First Day of Your New Life" },
      { img: "img/airNike3.jpg", title: "Just Do it!" }
    ]
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
    gallery: [
      { img: "img/imgJordan.jpg", title: "Fly High!" },
      { img: "img/imgJordan2.jpg", title: "Feel the Air" },
      { img: "img/imgJordan3.jpg", title: "Legendary Moves" }
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
    gallery: [
      { img: "./img/imgBlazer.jpg", title: "Step into Confidence" },
      { img: "./img/imgBlazer2.jpg", title: "Classic Never Fades" },
      { img: "./img/imgBlazer3.jpg", title: "Elegance in Motion" }
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
    gallery: [
      { img: "./img/imgCrater.jpg", title: "Adventure Starts Here" },
      { img: "./img/imgCrater2.jpeg", title: "Push Your Limits" },
      { img: "./img/imgCrater3.jpg", title: "Bold and Unstoppable" }
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
    gallery: [
      { img: "./img/hippie.jpg", title: "Freedom in Every Step" },
      { img: "./img/hippie1.jpg", title: "Live the Moment" },
      { img: "./img/hippie3.jpg", title: "Unleash Your Spirit" }
    ],
  },
]; 


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    choosenProduct = products[index];

    updateGallery(choosenProduct);
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const galleryContainer = document.querySelector(".gallery");

// Fonction pour générer la galerie
function updateGallery(product) {
  galleryContainer.innerHTML = ""; 

  product.gallery.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("galleryItem");

    const img = document.createElement("img");
    img.src = item.img;
    img.classList.add("galleryImg");

    const title = document.createElement("h1");
    title.textContent = item.title;
    title.classList.add("galleryTitle");

    // Alterner image et titre pour respecter le format demandé
    if (product.gallery.indexOf(item) % 2 === 0) {
      galleryItem.appendChild(title);
      galleryItem.appendChild(img);
    } else {
      galleryItem.appendChild(img);
      galleryItem.appendChild(title);
    }

    galleryContainer.appendChild(galleryItem);
  });
}


