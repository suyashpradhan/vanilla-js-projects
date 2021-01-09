const cards = document.querySelectorAll(".cards");

cards.forEach((item) => {
  item.addEventListener("click", () => {
    cards.forEach((item) => {
      item.classList.remove("active-card");
    });
    item.classList.add("active-card");
  });
});
