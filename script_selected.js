// Product data
const products = [
  {
    title: "Children's Bottle",
    code: "CA01",
    weight: "0",
    price: "708.44",
    shipping: "0",
    BD_Selling_price: "0",
    total: "NULL",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=iwVwiw732Y",
    image: "./assets/CA01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1SLDYKqaE9W6miRoWXkxjqoU_9RMVpgd1?usp=drive_link",
  },
  {
    title: "Children's double-sided pillow",
    code: "CA08",
    weight: "400",
    price: "231.4",
    shipping: "480",
    total: "711.4",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=ZdEq8G5bEe",
    image: "./assets/CA08.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/148GsvU_GQa7AArrrp0PurgU81QDNexx1?usp=drive_link",
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
                <h2 class="product-title">${product.title}</h2>
                <div class="product-info">
                    <p><span class="info-label">Code:</span> ${product.code}</p>
                    <p><span class="info-label">Weight:</span> ${product.weight}</p>
                    <p><span class="info-label">Price:</span> ${product.price}</p>
                    <p><span class="info-label">Shipping:</span> ${product.shipping}</p>
                    <p><span class="info-label">Total:</span> ${product.total}</p>
                     <p><span class="info-label">BD Selling price :</span> ${product.BD_Selling_price}</p>
                    <p><span class="info-label"><a href="${product.link}" target="_blank" class="product-link">Product Link</a></span></p>
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
