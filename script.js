document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".logo img");
  const Cancel = document.querySelector(".nav .imgCancer img");
  const nav = document.querySelector(".nav");
  const contact = document.querySelector(".nav ul .contact");

  menu.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
  });

  Cancel.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)";
  });
  contact.addEventListener("click", () => {
    if (screen.width <= 870) {
      nav.style.transform = "translateX(-100%)";
    }
  });
});
