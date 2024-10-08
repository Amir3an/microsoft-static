document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("ul");
  const openMenu = document.querySelector(".burger-icon");
  const checkBox = document.querySelector(".line");

  openMenu.addEventListener("click", () => {
    if (checkBox == "checked") {
      menu.style.right = "5%";
    } else {
      menu.style.right = "-105%";
    }
  });
});
