// Product data
const products = [
  {
    title: "Children's Bottle",
    code: "Bottle2",
    weight: "0",
    price: "648",
    shipping: "1200",
    total: "1848",
    image: "./assets/Bottle2.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1B9B3wMYi3H6BwT6EVpUfx8U0Ba-QnIex?usp=drive_link",
  },
  {
    title: "Children's Bottle",
    code: "Bottle3",
    weight: "0",
    price: "738",
    shipping: "1800",
    total: "2538",
    image: "./assets/Bottle3.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1mcq9XIPx4kqOLXyZ9EhRMBWV_MT869Jg?usp=drive_link",
  },
  {
    title: "Children's ",
    code: "Balis 1",
    weight: "(1200)3000",
    price: "1260",
    shipping: "3600",
    total: "4860",
    image: "./assets/Balis1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1covyC8q-LvnD5OBtNs9AXOyqb8DN6RT5?usp=drive_link",
  },
  {
    title: "Children's ",
    code: "Carrier1",
    weight: "(800)1500",
    price: "3060",
    shipping: "1800",
    total: "4860",
    image: "./assets/Carrier1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1ZpYBCsBiLBhu2pXa9j7Fmuu3HHhH4Z_A?usp=drive_link",
  },
  {
    code: "Hut 1",
    weight: "(1000)3000",
    price: "1170",
    shipping: "3600",
    total: "4770",
    image: "./assets/Hut1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1gSZNKCfB0tjD1Nrhw7PIdLdl9FgkEcVI?usp=drive_link",
  },
  {
    code: "Hut 2",
    weight: "(3500)6000",
    price: "2610",
    shipping: "7200",
    total: "9810",
    image: "./assets/Hut2.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1ArB1tJjiBrim9gKngZKTueYuSAY9Pacy?usp=drive_link",
  },
  {
    code: "Chair2",
    weight: "(3400)4500",
    price: "2880",
    shipping: "5400",
    total: "8280",
    image: "./assets/chair2.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/160Ln-Xad5Wa6_g21lqmlM2hx97NOFmZO?usp=drive_link",
  },
  {
    code: "Milk Shaker 1",
    weight: "(374)600",
    price: "720",
    shipping: "720",
    total: "1440",
    image: "./assets/milkshaker1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1CLMuyQ5MC2qATDxAFvIcCKXiY4dW6Upj?usp=drive_link",
  },
  {
    code: "Food Bowl 1",
    weight: "(340)700",
    price: "900",
    shipping: "840",
    total: "1740",
    image: "./assets/foodbowl1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/11V6W55QB2-bPLpAFXv40Mbfr1rA1j7zV?usp=drive_link",
  },
  {
    code: "Food Bowl 1",
    weight: "(340)700",
    price: "900",
    shipping: "840",
    total: "1740",
    image: "./assets/foodbowl1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/11V6W55QB2-bPLpAFXv40Mbfr1rA1j7zV?usp=drive_link",
  },
  {
    code: "BackPack 2",
    weight: "(300)700",
    price: "1026",
    shipping: "840",
    total: "1866",
    image: "./assets/backpack2.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/15MaMTWJEwm7SVSigYSzJu3k-YUymuP1S?usp=drive_link",
  },
  {
    code: "BackPack 3",
    weight: "(500)900",
    price: "1710",
    shipping: "1080",
    total: "2790",
    image: "./assets/backpack3.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1-zK2wu22LW3VUkS1PNfYITLKRUvmu0Un?usp=drive_link",
  },
  {
    code: "BackPack 4",
    weight: "(500)900",
    price: "1422",
    shipping: "1080",
    total: "2502",
    image: "./assets/backpack4.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1HjWGRvWUk6zi1DoLhdsB0gcK1dRqIA4J?usp=drive_link",
  },
  {
    code: "BackPack 5",
    weight: "(850)1400",
    price: "684",
    shipping: "1680",
    total: "2364",
    image: "./assets/backpack5.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1nnmW2vrYTZ-ZKl4M7v-hITCux_7lJK49?usp=drive_link",
  },
  {
    code: "BackPack 6",
    weight: "(400)900",
    price: "1062",
    shipping: "1080",
    total: "2142",
    image: "./assets/backpack6.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1Dk8m4klH5EY8I3U-kdwH10XwUZL1wl39?usp=drive_link",
  },
  {
    code: "Umbrella 1",
    weight: "(490)1000",
    price: "1080",
    shipping: "1200",
    total: "2280",
    image: "./assets/umbrella1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1DJ1AUCPKm7fvGZL0DxTIQJpovpAn6XW9?usp=drive_link",
  },
  {
    code: "Umbrella 2",
    weight: "(375)1000",
    price: "1080",
    shipping: "1200",
    total: "2280",
    image: "./assets/umbrella2.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1ZSfW656_itowaM8YWnGiOuevkGgQMOP_?usp=drive_link",
  },
  {
    code: "Umbrella 3",
    weight: "(360)1000",
    price: "1728",
    shipping: "1200",
    total: "2928",
    image: "./assets/umbrella3.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1EeQIw2CCsFzxUNyS1DdtKNMAXzv-_DWM?usp=drive_link",
  },
  // Add more products as needed
];

// DOM elements
const productGrid = document.getElementById("productGrid");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModalBtn");

// Render product cards
function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="view-larger-btn" data-image="${product.image}" data-title="${product.title}">
                    <span class="view-larger-text">View Larger</span>
                </button>
            </div>
            <div class="product-details">
            
                <div class="product-info">
                    <p><span class="info-label">Code:</span> ${product.code}</p>
                    <p><span class="info-label">Weight:</span> ${product.weight}</p>
                    <p><span class="info-label">Price:</span> ${product.price}</p>
                    <p><span class="info-label">Shipping:</span> ${product.shipping}</p>
                    <p><span class="info-label">Total:</span> ${product.total}</p>
                </div>
                <a href="${product.driveLink}" target="_blank" rel="noopener noreferrer" class="drive-btn">
                    <svg class="drive-icon" viewBox="0 0 24 24">
                        <path d="M7.5 3.75H3.75v3.75H7.5zm1.5 0v3.75h3.75V3.75zm-1.5 1.5H3.75v3.75H7.5zm1.5 0v3.75h3.75V5.25zm-1.5 1.5H3.75v3.75H7.5zm1.5 0v3.75h3.75V6.75z"/>
                    </svg>
                    View on Drive
                </a>
            </div>
        </div>
    `
    )
    .join("");

  // Add event listeners to all view buttons
  document.querySelectorAll(".view-larger-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const imageSrc = this.getAttribute("data-image");
      const imageAlt = this.getAttribute("data-title");
      openModal(imageSrc, imageAlt);
    });
  });
}

// Modal functions
function openModal(imageSrc, imageAlt) {
  console.log("Opening modal with:", imageSrc);
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  imageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  imageModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listeners
closeModalBtn.addEventListener("click", closeModal);
imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) {
    closeModal();
  }
});

// Initialize
document.addEventListener("DOMContentLoaded", renderProducts);
