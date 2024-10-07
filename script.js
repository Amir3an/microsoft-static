const menu = document.querySelector("nav");
const openMenu = document.querySelector(".burger-icon");

openMenu.addEventListener(onclick, () => {
  if (menu.style.right >= "-105%") {
    menu.style.right = "5%";
  }
});
