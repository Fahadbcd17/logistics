// Product data
const products = [
  {
    title: "Children's Jewelry Box",
    code: "CJ01",
    weight: "1500",
    price: "1224.64",
    shipping: "1800",
    total: "3024.64",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=GMEtp4WS25",
    image: "./assets/CJ01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1iy8rtZfy4gUwl3rxA-weOV6t0FPakRTV?usp=drive_link",
  },
  {
    title: "Children's Bottol",
    code: "CA01",
    weight: "0",
    price: "708.44",
    shipping: "0",
    total: "NULL",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=iwVwiw732Y",
    image: "./assets/CA01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1SLDYKqaE9W6miRoWXkxjqoU_9RMVpgd1?usp=drive_link",
  },
  {
    title: "Children's  showpiece house",
    code: "CS01",
    weight: "3000",
    price: "2812.4",
    shipping: "3600",
    total: "6412.4",
    link: "https://mobile.yangkeduo.com/goods.html?ps=Fv4hQkZr9w",
    image: "./assets/CS01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1Zwt2HEDkcuW8jzBpxsq8pH6O4T8AIj4o?usp=drive_link",
  },
  {
    title: "Children's  showpiece house 2",
    code: "CS02",
    weight: "1400",
    price: "1032.4",
    shipping: "1680",
    total: "2712.4",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=nynXEHt4Ox",
    image: "./assets/CS02.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1cc0btXfxGbpts9TuruUN7u-_G1VcKT2H?usp=drive_link",
  },
  {
    title: "Children's Hello Kitty Bag",
    code: "CB01",
    weight: "0",
    price: "427.2",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods.html?ps=I0a0rirRgQ",
    image: "./assets/CB01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1ebYOy-U59IKePlDAsUHMkC0p8S_IFsQH?usp=drive_link",
  },
  {
    title: "Children's Chair",
    code: "CC01",
    weight: "2000",
    price: "4770.4",
    shipping: "2400",
    total: "7170.4",
    link: "https://mobile.yangkeduo.com/goods.html?ps=G4k6KIefTs",
    image: "./assets/CC01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1YfbQBNKKDmG-W2OVSPbhXKhQkCes141F?usp=drive_link",
  },
  {
    title: "Children's Car",
    code: "CC02",
    weight: "5000",
    price: "3364.2",
    shipping: "6000",
    total: "9364.2",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=yp5kVWqG3S",
    image: "./assets/CC02.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/15WJXvv6ih0I6XMXjUKY3N_SlJgdMsguY?usp=drive_link",
  },
  {
    title: "Children's Car 2",
    code: "CC03",
    weight: "1400",
    price: "1228.2",
    shipping: "1680",
    total: "2908.2",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=x3pfq9gYX4",
    image: "./assets/CC03.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1U5zkgfv8VhnjghpPid9Yp5dSkI5UgR00?usp=drive_link",
  },
  {
    title: "Children's Car 3",
    code: "CC04",
    weight: "14200",
    price: "4948.4",
    shipping: "17040",
    total: "21988.4",
    link: "https://mobile.yangkeduo.com/goods.html?ps=XHq7k8MUe7",
    image: "./assets/CC04.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1xef7CoyVNTemgABSPRXn-OUsFwMDuf67?usp=drive_link",
  },
  {
    title: "Children's Car 4",
    code: "CC05",
    weight: "2500",
    price: "2438.6",
    shipping: "3000",
    total: "5438.6",
    link: "https://mobile.yangkeduo.com/goods.html?ps=6IzsO3mpdo",
    image: "./assets/CC05.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1B1oU18XFvboCwiVP408lQTskw6wg1HTQ?usp=drive_link",
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
