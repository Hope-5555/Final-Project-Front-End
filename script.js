const hamburgerMenu = document.querySelector("#hamburger");
const navList = document.querySelector("ul");
const closeBtn = document.querySelector("#close-btn");

hamburgerMenu.addEventListener("click", () => {
  navList.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  navList.style.display = "none";
});
