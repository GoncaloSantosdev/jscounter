let removeButton = document.querySelector("#removeButton");
let addButton = document.querySelector("#addButton");
let number = document.querySelector("#number");
let stars = document.querySelector("#stars");
let count = 0;

addButton.addEventListener("click", () => {
  count += 1;
  number.innerHTML = count;
  for (let i = count; i === count; i++) {
    const newStar = document.createElement("span");
    newStar.className = "fa fa-star checked fa-lg";
    stars.appendChild(newStar);
  }
});

removeButton.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    let lastStar = stars.lastElementChild;
    lastStar.remove();
  }
  number.innerHTML = count;
});