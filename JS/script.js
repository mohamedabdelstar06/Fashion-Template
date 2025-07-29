const openBTn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelector(".nav-wrapper");

openBTn.addEventListener("click", () => {
  links.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
  links.classList.remove("menu-open");
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  
  if (window.scrollY > 100) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
const currentImage = document.getElementById("current-img");
  const thumbnails = document.querySelectorAll(".thumbnail"); // اسم صحيح

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
      currentImage.src = this.src;

      thumbnails.forEach(t => t.classList.remove("active")); // نفس الاسم

      this.classList.add("active");
    });
  });