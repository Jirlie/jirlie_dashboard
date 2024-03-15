const closeBtn = document.querySelector(".close");
const list = document.querySelector(".list");
const listBtn = document.querySelector(".list-btn");
console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  list.classList.remove("list-close");
});

listBtn.addEventListener("click", () => {
  list.classList.add("list-close");
});


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".dashboard .icons");
  
    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", function () {
        icon.classList.add("hovered");
      });
  
      icon.addEventListener("mouseleave", function () {
        icon.classList.remove("hovered");
      });
    });
  });
  
  
  
  