document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("ul");
  const openMenu = document.querySelector(".onclick");

  openMenu.addEventListener("click", () => {
    if (menu.style.right == "-105%") {
      menu.style.right = "5%";
    } else {
      menu.style.right = "-105%";
    }
  });
});
