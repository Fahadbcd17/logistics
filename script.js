// Product data
const products = [
  {
    title: "Children's Bottle",
    code: "CA01",
    weight: "550",
    price: "708.44",
    shipping: "660",
    total: "1368.44",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=iwVwiw732Y",
    image: "./assets/CA01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1SLDYKqaE9W6miRoWXkxjqoU_9RMVpgd1?usp=drive_link",
  },
  {
    title: "Children's Bath",
    code: "CA02",
    weight: "2100",
    price: "1940.2",
    shipping: "2520",
    total: "4460.2",
    link: "https://mobile.yangkeduo.com/goods.html?ps=XIZ4w0UsoT",
    image: "./assets/CA02.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1l4787YBBt21QImC88U6BHzGm2RPYHIhV?usp=drive_link",
  },
  
  {
    title: "Children's Bath 2",
    code: "CA03",
    weight: "1900",
    price: "1263.8",
    shipping: "2280",
    total: "3543.8",
    link: "https://mobile.yangkeduo.com/goods.html?ps=yFrbDnblt5",
    image: "./assets/CA03.png",
    driveLink:
      "https://drive.google.com/drive/folders/1bXf2zN_whwxHx2mtDRxj5cN0e2TaDGqU?usp=drive_link",
  },
  {
    title: "Children's nail cutter ",
    code: "CA04",
    weight: "100",
    price: "178",
    shipping: "120",
    total: "298",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=an34Rwj53j",
    image: "./assets/CA04.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1IQI0xPwfB_lZXtH7lGx8d0XvACGd9egP?usp=drive_link",
  },
  {
    title: "Children's  ",
    code: "CA05",
    weight: "200",
    price: "427.2",
    shipping: "240",
    total: "667.2",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=kXvb9HOvUy",
    image: "./assets/CA05.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1O_9RfBXVKGUSv68nx-I9f7haYKm7R8kQ?usp=drive_link",
  },
  {
    title: "Children's baby teether set",
    code: "CA06",
    weight: "350",
    price: "1246",
    shipping: "420",
    total: "1666",
    link: "https://mobile.yangkeduo.com/goods.html?ps=5kXWCBcnZY",
    image: "./assets/CA06.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/16EHYjbxkk-4xe55QYeZRBohFhx2sZ8-B?usp=drive_link",
  },
    {
    title: "Children's feeding set",
    code: "CA07",
    weight: "350",
    price: "1050.2",
    shipping: "420",
    total: "1470.2",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=PUBYoi6I3L",
    image: "./assets/CA07.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1Y051riLo2mFqNEsYVZhWG_U5UkqFHS7E?usp=drive_link",
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
  {
    title: "Children's Food bowl set",
    code: "CA09",
    weight: "0",
    price: "640.8",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods.html?ps=p8vpi3IY9V",
    image: "./assets/CA09.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/109UIpIldumz0y_6KLq0B3c376Li4I2fH?usp=drive_link",
  },
  {
    title: "Children's Sleeping bed wrap",
    code: "CA10",
    weight: "2100",
    price: "2990.4",
    shipping: "2520",
    total: "5510.4",
    link: "https://mobile.yangkeduo.com/goods.html?ps=q8AQQIfGz8",
    image: "./assets/CA10.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1EKGR4Zp-NTY84NnVBvPYo0aewwalUR7B",
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
    title: "Children's Hello Kitty Bag",
    code: "CB02",
    weight: "400",
    price: "1014.6",
    shipping: "480",
    total: "1494.6",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=gx0JWoTWcG",
    image: "./assets/CB02.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1V6EbwyX9ooBnQkKQZXscB1GvQ4rmM4PI?usp=drive_link",
  },
  {
    title: "Children's Chair",
    code: "CC01",
    weight: "4500",
    price: "4770.4",
    shipping: "5400",
    total: "10170.4",
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
    weight: "2550",
    price: "1228.2",
    shipping: "3060",
    total: "4288.2",
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
  {
    title: "Children's Bike ",
    code: "CC06",
    weight: "1600",
    price: "1139.2",
    shipping: "1920",
    total: "3059.2",
    link: "https://mobile.yangkeduo.com/goods.html?ps=ZYeFSZkZto",
    image: "./assets/CC06.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1TlvzexPgqMmap94Z-BiiC-dvfrHW8d7x?usp=drive_link",
  },
  {
    title: "Children's Car 5 ",
    code: "CC07",
    weight: "1600",
    price: "1851.2",
    shipping: "1920",
    total: "3771.2",
    link: "https://mobile.yangkeduo.com/goods.html?ps=UhtxpboY7v",
    image: "./assets/CC07.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/18lP5jX-hra1xMrLVMrFejgiVGWnDraBD?usp=drive_link",
  },
  {
    title: "Children's sofa",
    code: "CC08",
    weight: "2100",
    price: "979",
    shipping: "2520",
    total: "3499",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=QYTY1a4q8E",
    image: "./assets/CC08.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1wcS11haCxhUrvWGOQ9qFOv3uiVudc6bc",
  },
  {
    title: "Children's Toddler hanging chair cradle ",
    code: "CC09",
    weight: "6000",
    price: "2670",
    shipping: "7200",
    total: "9870",
    link: "https://mobile.yangkeduo.com/goods.html?ps=XVENXvXuQz",
    image: "./assets/CC09.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1BlS3nmb8UyFZD3IMgF5H8ZOq36PVbnNC",
  },
  {
    title: "Children's dress",
    code: "CD01",
    weight: "600",
    price: "1014.6",
    shipping: "720",
    total: "1734.6",
    link: "https://mobile.yangkeduo.com/goods.html?ps=Npn53RHt7X",
    image: "./assets/CD01.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1rbtAKoPnmiRL6jeoAttibDPBLmCMOawr",
  },
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
    title: "Children's Toy",
    code: "CT01",
    weight: "0",
    price: "818.8",
    shipping: "0",
    total: "0",
    link: "https://e.tb.cn/h.hPMgns0RnBVL689?tk=fkJP43NrdlU CZ057 ",
    image: "./assets/CT01.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1oP6Ok0mPU6vjeM_CjaJ1ZrSa3q_SEM-A",
  },
  {
    title: "Children's Toy 2",
    code: "CT02",
    weight: "0",
    price: "3880.4",
    shipping: "0",
    total: "0",
    link: "https://e.tb.cn/h.hP2GTfnHwxy1KbN?tk=ehOj43ndCKE",
    image: "./assets/CT02.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1sLzM5-wHOQjAqDOnytbypLyDoyHsxAB4",
  },
  {
    title: "Children's Toy 2",
    code: "CT03",
    weight: "0",
    price: "692.42",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=BNLdEEumUt",
    image: "./assets/CT03.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1iPvyPFS2f-R2hrM2nUVOnmeVJ0f-ki8y",
  },
  {
    title: "Children's Toy 2",
    code: "CT04",
    weight: "0",
    price: "2741.2",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=cfUnb5F93l",
    image: "./assets/CT04.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1xef7CoyVNTemgABSPRXn-OUsFwMDuf67",
  },
  {
    title: "Children's Train",
    code: "CT05",
    weight: "0",
    price: "2278.4",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods.html?ps=Yqnr4z4fH6",
    image: "./assets/CT05.jpg",
    driveLink:
      "https://drive.google.com/open?id=1YDGk3MmEu2CRTQ9nkEGsSLRcpy4YwOV7&authuser=3",
  },
  {
    title: "Children's Basketball",
    code: "CT06",
    weight: "3500",
    price: "1157",
    shipping: "4200",
    total: "5357",
    link: "https://mobile.yangkeduo.com/goods.html?ps=rf5k2tcpFX",
    image: "./assets/CT06.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1Dtmd80qwa5-CyGqmuaJbcwpP1k9uMulc",
  },
  {
    title: "Children's Toy",
    code: "CT07",
    weight: "0",
    price: "2670",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=8YoCVC8tjw",
    image: "./assets/CT07.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1U_5tbh8CY3Nd3e7f0vBtwn2dZ-AHJpbQ",
  },
 {
    title: "Children's Baby hand rattle toy",
    code: "CT08",
    weight: "900",
    price: "783.2",
    shipping: "1080",
    total: "1863.2",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=9AkX73C2GS",
    image: "./assets/CT08.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1QIGQSGaAkkna2PemyvHQyTBWEZmwM2AJ",
  },
  {
    title: "Children's toy",
    code: "CT09",
    weight: "800",
    price: "1068",
    shipping: "960",
    total: "2028",
    link: "https://mobile.yangkeduo.com/goods.html?ps=8crvL5dFtg",
    image: "./assets/CT09.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1Va45X3ZMq9bOhJ35jszcO-WB98qNhKkv",
  },
  {
    title: "Children's  house kitchen toy set ",
    code: "CT10",
    weight: "0",
    price: "890",
    shipping: "0",
    total: "0",
    link: "https://mobile.yangkeduo.com/goods2.html?ps=xYiJuaojsE",
    image: "./assets/CT10.jpg",
    driveLink:
      "https://drive.google.com/drive/u/3/folders/1dYGRcHSwM_9Cbjiu_UWnuj2v_lEvWmNl",
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
