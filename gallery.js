// Ambil elemen container dan tombol halaman
const galleryContainer = document.querySelector(".frame-11");
const pageButtons = document.querySelectorAll(".frame-12 .frame-13");

// Data semua halaman
const galleryPages = {
  1: [ "img/gallery-1.png", "img/gallery-2.png", "img/gallery-3.png",
       "img/gallery-4.png", "img/gallery-5.png", "img/gallery-6.png",
       "img/gallery-7.png", "img/gallery-8.png", "img/gallery-9.png",
       "img/gallery-10.png", "img/gallery-11.png", "img/gallery-12.png",
       "img/gallery-13.png", "img/gallery-14.png", "img/gallery-15.png" ],
  2: [ "img/gallery-16.png", "img/gallery-17.png", "img/gallery-18.png",
       "img/gallery-19.png", "img/gallery-20.png", "img/gallery-21.png",
       "img/gallery-22.png", "img/gallery-23.png", "img/gallery-24.png",
       "img/gallery-25.png", "img/gallery-26.png", "img/gallery-27.png",
       "img/gallery-28.png", "img/gallery-29.png", "img/gallery-30.png" ],
  3: [ "img/gallery-31.png", "img/gallery-32.png", "img/gallery-33.png",
       "img/gallery-34.png", "img/gallery-35.png", "img/gallery-36.png",
       "img/gallery-37.png", "img/gallery-38.png", "img/gallery-39.png",
       "img/gallery-40.png", "img/gallery-41.png", "img/gallery-42.png",
       "img/gallery-43.png", "img/gallery-44.png", "img/gallery-45.png" ],
  4: [ "img/gallery-46.png", "img/gallery-47.png", "img/gallery-48.png",
       "img/gallery-49.png", "img/gallery-50.png", "img/gallery-51.png",
       "img/gallery-52.png", "img/gallery-53.png", "img/gallery-54.png",
       "img/gallery-55.png", "img/gallery-56.png", "img/gallery-57.png",
       "img/gallery-58.png", "img/gallery-59.png", "img/gallery-60.png" ],
  5: [ "img/gallery-61.png", "img/gallery-62.png", "img/gallery-63.png",
       "img/gallery-64.png", "img/gallery-65.png", "img/gallery-66.png",
       "img/gallery-67.png", "img/gallery-68.png", "img/gallery-69.png",
       "img/gallery-70.png", "img/gallery-71.png", "img/gallery-72.png",
       "img/gallery-73.png", "img/gallery-74.png", "img/gallery-75.png" ],
  6: [ "img/gallery-76.png", "img/gallery-77.png", "img/gallery-78.png",
       "img/gallery-79.png", "img/gallery-80.png", "img/gallery-81.png",
       "img/gallery-82.png", "img/gallery-83.png", "img/gallery-84.png",
       "img/gallery-85.png", "img/gallery-86.png", "img/gallery-87.png",
       "img/gallery-88.png", "img/gallery-89.png", "img/gallery-90.png" ],
  7: [ "img/gallery-91.png", "img/gallery-92.png", "img/gallery-93.png",
       "img/gallery-94.png", "img/gallery-95.png", "img/gallery-96.png",
       "img/gallery-97.png", "img/gallery-98.png", "img/gallery-99.png",
       "img/gallery-100.png", "img/gallery-101.png", "img/gallery-102.png",
       "img/gallery-103.png", "img/gallery-104.png", "img/gallery-105.png" ],
  8: [ "img/gallery-106.png", "img/gallery-107.png", "img/gallery-108.png",
       "img/gallery-109.png", "img/gallery-110.png", "img/gallery-111.png",
       "img/gallery-112.png", "img/gallery-113.png", "img/gallery-114.png",
       "img/gallery-115.png", "img/gallery-116.png", "img/gallery-117.png",
       "img/gallery-118.png", "img/gallery-119.png", "img/gallery-120.png" ]
};

// Fungsi menampilkan gambar ke .frame-11
function renderGallery(page = 1) {
  const images = galleryPages[page];
  if (!images) return;

  let html = "";
  images.forEach((src, index) => {
    html += `<img class="image-${index + 3}" src="${src}" />`;
  });

  galleryContainer.innerHTML = html;
}

// Fungsi mengganti tombol aktif
function setActiveButton(activeIndex) {
  pageButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index === activeIndex);
  });
}

// Event klik tiap tombol
pageButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    renderGallery(index + 1);
    setActiveButton(index);
  });
});

// Saat halaman pertama kali dibuka → langsung aktif halaman 1
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(1);
  setActiveButton(0);
});
