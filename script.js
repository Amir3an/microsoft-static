document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const menu = document.querySelector("ul");
  const openMenu = document.querySelector(".burger");
  const button = document.querySelector(".tuch-mobile");

  openMenu.addEventListener("click", () => {
    button.style.display = "inline";
    menu.style.right = "0%";
  });

  button.addEventListener("click", () => {
    button.style.display = "none";
    menu.style.right = "-105%";
  });
});