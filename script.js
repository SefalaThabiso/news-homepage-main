let menuButton = document.querySelector("[data-menu]");
const navigation = document.getElementById("navigation");

console.log(menuButton);

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");

  if (navigation.classList.contains("show")) {
    menuButton.querySelector("img").src = "./assets/images/icon-menu-close.svg";
  } else {
    menuButton.querySelector("img").src = "./assets/images/icon-menu.svg";
  }

  menuButton = document.querySelector("[data-menu]");
  console.log(menuButton);
});
