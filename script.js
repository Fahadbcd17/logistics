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
    weight: "3000",
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
    weight: "1500",
    price: "3060",
    shipping: "1800",
    total: "4860",
    image: "./assets/Carrier1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1ZpYBCsBiLBhu2pXa9j7Fmuu3HHhH4Z_A?usp=drive_link",
  },
  {
    code: "Hut 1",
    weight: "3000",
    price: "1170",
    shipping: "3600",
    total: "4770",
    image: "./assets/Hut1.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1gSZNKCfB0tjD1Nrhw7PIdLdl9FgkEcVI?usp=drive_link",
  },
  {
    code: "Hut 2",
    weight: "6000",
    price: "2610",
    shipping: "7200",
    total: "9810",
    image: "./assets/Hut2.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1ArB1tJjiBrim9gKngZKTueYuSAY9Pacy?usp=drive_link",
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
